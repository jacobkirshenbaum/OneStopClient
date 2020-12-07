import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.sass']
})
export class RegisterDialogComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<RegisterDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.username = data.username;
    this.password = data.password;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [this.username, []],
      password: [this.password, []],
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }

}
