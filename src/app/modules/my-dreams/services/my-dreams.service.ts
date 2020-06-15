import {Injectable} from '@angular/core';
import {DreamModel} from '../models/dream.model';
import {MessageModel, TYPE} from '../../../shared/models/message.model';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../../../shared/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class MyDreamsService extends LocalStorageService  {
  private translate: TranslateService;
  dreams: DreamModel[] = [];
  constructor(translate: TranslateService) {
    super();
    this.setInitialData();
    this.translate = translate;
  }
  private setInitialData(): void{
    const dreams = this.getDreams();
    this.dreams = dreams ? dreams : [];
  }
  private saveDreams(): void{
    this.set('dreams', this.dreams);
  }
  recoverDreams(data: object): void{
    const dreams: DreamModel[] = data as DreamModel[];
    this.set('dreams', dreams);
  }
  getDreams(): [DreamModel] {
    return this.get('dreams');
  }
  dreamAlreadyExists(name: string): boolean{
    return this.dreams.some(dream => dream.name === name);
  }
  getDream(id: number): DreamModel{
    return this.dreams.find(dream => dream.id === id);
  }
  removeDream(id: number): Observable<MessageModel>{
    return new Observable((observer) => {
      const index: number = this.dreams.findIndex(dream => dream.id === id);
      this.dreams.splice(index, 1);
      this.saveDreams();
      this.translate.get('dreams.messages.dream-deleted').subscribe((message) => {
        observer.next(new MessageModel(TYPE.MESSAGE, message));
        observer.complete();
      });
    });
  }
  saveDream(dreamModel: DreamModel): Observable<MessageModel>{
    return new Observable((observer) => {
      const index: number = this.dreams.findIndex(dream => dream.id === dreamModel.id);
      this.dreams[index] = dreamModel;
      this.saveDreams();
      this.translate.get('dreams.messages.dream-saved').subscribe((message) => {
        observer.next(new MessageModel(TYPE.MESSAGE, message));
        observer.complete();
      });
    });
  }
  addDream(name: string): Observable<MessageModel> {
    return new Observable((observer) => {
      if (this.dreamAlreadyExists(name)){
        this.translate.get('dreams.errors.dream-already-exist').subscribe((message) => {
          observer.next(new MessageModel(TYPE.ERROR, message));
          observer.complete();
        });
      }
      else{
        const newDream: DreamModel = new DreamModel(name);
        this.dreams.push(newDream);
        this.saveDreams();
        this.translate.get('dreams.messages.dream-created').subscribe((message) => {
          observer.next(new MessageModel(TYPE.MESSAGE, message));
          observer.complete();
        });
      }
    });
  }
}

