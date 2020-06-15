import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDreamsComponent } from './my-dreams.component';
import { MyDreamsRoutingModule } from './my-dreams-routing.module';
import { DreamDetailsComponent } from './views/dream-details/dream-details.component';
import { DreamsListComponent } from './views/dreams-list/dreams-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { RecoverComponent } from './views/recover/recover.component';
import { DeleteComponent} from './views/delete/delete.component';

@NgModule({
  declarations: [
    MyDreamsComponent,
    DreamDetailsComponent,
    RecoverComponent,
    DreamsListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyDreamsRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    TranslateModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class MyDreamsModule {}
