import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DreamDetailsComponent } from './views/dream-details/dream-details.component';
import { DreamsListComponent } from './views/dreams-list/dreams-list.component';
import { MyDreamsComponent } from './my-dreams.component';
import {RecoverComponent} from './views/recover/recover.component';

export const routes: Routes = [
    {
      path: '',
      component: MyDreamsComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'list'
        },
        {
          path: 'details',
          component: DreamDetailsComponent
        },
        {
          path: 'list',
          component: DreamsListComponent
        },
        {
          path: 'recover',
          component: RecoverComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDreamsRoutingModule{}
