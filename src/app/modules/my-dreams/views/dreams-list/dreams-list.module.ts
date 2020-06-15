import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DreamsListComponent } from './dreams-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [DreamsListComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class DreamsListModule { }
