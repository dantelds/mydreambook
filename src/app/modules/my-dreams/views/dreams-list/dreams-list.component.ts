import {Component, OnInit} from '@angular/core';
import { MyDreamsService } from '../../services/my-dreams.service';
import { DreamModel } from '../../models/dream.model';
import { Router } from '@angular/router';
import { MessagesService } from '../../../../shared/services/messages.service';
@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.styl']
})
export class DreamsListComponent implements OnInit {
  dreams: DreamModel[];
  dream: string;
  constructor(private service: MyDreamsService,
              private router: Router,
              private messagesService: MessagesService) {
  }
  getDreams(): void {
    this.dreams = this.service.getDreams();
    console.log('my current dreams', this.dreams);
  }
  ngOnInit(): void {
    this.getDreams();
  }
  addDream(): void {
    this.service.addDream(this.dream).subscribe((response) => {
      console.log(response);
      this.messagesService.emitMessage(response);
      this.dream = '';
      this.getDreams();
    });
  }
  openDreamsDetail(dream: DreamModel): void {
    console.log('i´m going to display this', dream);
    this.router.navigate(['/details', {id: dream.id}]);
  }
}
