import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {DreamModel} from '../../models/dream.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.styl']
})
export class DeleteComponent implements OnInit {
  dream: DreamModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {dream},
              private dialogRef: MatDialogRef<DeleteComponent>,
              private route: ActivatedRoute) {
    this.dream = data.dream as DreamModel;
  }

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
