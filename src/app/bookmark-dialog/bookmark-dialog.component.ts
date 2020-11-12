import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bookmark-dialog',
  templateUrl: './bookmark-dialog.component.html',
  styleUrls: ['./bookmark-dialog.component.sass']
})
export class BookmarkDialogComponent implements OnInit {

  form: FormGroup;
  name: string;
  url: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<BookmarkDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.url = data.url;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.name, []],
      url: [this.url, []],
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }

}
