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
  newStepText: string;
  constructor(private service: MyDreamsService, private route: ActivatedRoute,
              private location: Location, private router: Router,
              private dialog: MatDialog,
              private messagesService: MessagesService) {}


  openDialog() {
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
      this.goBack();
    }
    else{
      this.dream = dream;
      console.log('my current dream', this.dream);
    }
  }
  setGoalStatus(index: number, checked: boolean): void{
    this.dream.goals[index].accomplished = checked;
  }
  deleteStep(index: number): void{
    this.dream.goals.splice(index, 1);
  }
  addStep(): void{
    if (this.newStepText && this.newStepText.length > 3){
      const newStep = new GoalsModel(this.newStepText);
      this.dream.goals.push(newStep);
      this.newStepText = '';
      console.log(this.dream);
    }
  }
  goBack() {
    this.router.navigate(['list']);
  }
  removeDream(){
    this.service.removeDream(this.dream.id).subscribe((response) => {
      this.messagesService.emitMessage(response);
      this.goBack();
    });
  }
  saveDream() {
    let accomplished = true;
    this.dream.goals.forEach(goal => {
      console.log(goal.accomplished);
      if (!goal.accomplished){
        accomplished = false;
      }
    });
    this.dream.accomplished = accomplished;
    console.log('i´m going to save this', this.dream);
    this.service.saveDream(this.dream).subscribe((response) => {
      this.messagesService.emitMessage(response);
      this.goBack();
    });
  }
}
