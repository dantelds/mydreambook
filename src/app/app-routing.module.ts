import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'my-dreams' },
  { path: 'my-dreams', loadChildren:  (): any => import('./modules/my-dreams/my-dreams.module').then((m: any) => m.MyDreamsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
