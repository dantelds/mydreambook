import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {DreamModel} from '../../models/dream.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.styl']
})
export class DeleteDialogComponent implements OnInit {
  dream: DreamModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {dream},
              private dialogRef: MatDialogRef<DeleteDialogComponent>,
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
