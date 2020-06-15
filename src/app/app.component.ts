import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MessagesService} from './shared/services/messages.service';
import {MessageModel, TYPE} from './shared/models/message.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent{
  constructor(private translate: TranslateService,
              private snackBar: MatSnackBar,
              private messagesService: MessagesService) {
    this.setDefaultLanguage();
    messagesService.messageManager.subscribe(message => this.onSendMessage(message));
  }

  returnDefaultLanguage(): string{
    const availableLanguages: string[] = ['en', 'es'];
    const navigatorLanguage: string = navigator.language.substr(0, 2);
    const isLanguageAvailable: boolean = availableLanguages.some(language => {
      return language ===  navigatorLanguage;
    });
    return isLanguageAvailable ? navigatorLanguage : 'es';
  }

  setDefaultLanguage(): void{
    const defaultLanguage: string = this.returnDefaultLanguage();
    this.translate.setDefaultLang(defaultLanguage);
  }

  openSnackBar(response: MessageModel) {
    const config = {
      duration: 5000,
      panelClass: response.type === TYPE.ERROR ? 'snackbar-error' : 'snackbar-message'
    };
    this.snackBar.open(response.message, 'close', config);
  }
  onSendMessage(message: MessageModel){
    this.openSnackBar(message);
  }
}

