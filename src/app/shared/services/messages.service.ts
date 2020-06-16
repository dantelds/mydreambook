import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {MessageModel} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService{
  public messageManager = new Subject<MessageModel>();
  emitMessage(message: MessageModel): void{
    this.messageManager.next(message);
  }
}
