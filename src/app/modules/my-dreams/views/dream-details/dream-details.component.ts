import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDreamsService } from '../../services/my-dreams.service';
import { DreamModel, GoalsModel } from '../../models/dream.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MessagesService } from '../../../../shared/services/messages.service';
import { DeleteComponent } from '../delete/delete.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dream-details',
  templateUrl: './dream-details.component.html',
  styleUrls: ['./dream-details.component.styl']
})
export class DreamDetailsComponent implements OnInit {
  dream: DreamModel;
  constructor(private service: MyDreamsService, private route: ActivatedRoute,
              private location: Location, private router: Router,
              private dialog: MatDialog,
              private messagesService: MessagesService) {}


  openDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dream: this.dream
    };
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      action => {
        if (action){
          this.removeDream();
        }
      }
    );
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    const dream: DreamModel = this.service.getDream(id);
    if (!dream){
      this.goToList();
    }
    else{
      this.dream = dream;
      console.log('my current dream', this.dream);
    }
  }
  setGoalStatus(index: number, checked: boolean): void{
    this.dream.setGoalStatus(index, checked);
  }
  deleteGoal(index: number): void{
    this.dream.deleteGoal(index);
  }
  addGoal(goal: HTMLInputElement): void{
    if (goal.value && goal.value.length > 3){
      this.dream.addGoal(goal.value);
      goal.value = '';
    }
  }
  goToList() {
    this.router.navigate(['list']);
  }
  removeDream(){
    this.service.removeDream(this.dream.id).subscribe((response) => {
      this.messagesService.emitMessage(response);
      this.goToList();
    });
  }
  saveDream(): void{
    this.dream.setAccomplishedStatus();
    this.service.saveDream(this.dream).subscribe((response) => {
      this.messagesService.emitMessage(response);
      this.goToList();
    });
  }
}
