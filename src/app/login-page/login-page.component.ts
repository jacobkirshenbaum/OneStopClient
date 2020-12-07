import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';
import {environment} from '../../environments/environment';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  users: any[];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.data.pipe(map(data => data.pageData))
      .subscribe((data: any) => {
        this.users = data;
      });
  }

  processUser(username: string, password: string): void {
    if ((this.users.find(element => element.username === username && element.password === password) === undefined)) {
       alert('Invalid username or password');
     /* const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.httpClient.post(environment.baseUrl + `users/save`, '{"username": "' + username + '", "bookmarks": true}', {headers: headers})
        .subscribe();*/
    }
    else {
      this.router.navigate(['./home/' + username]);
    }
  }

  registerUser(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Registration'
    };

    const dialogRef = this.dialog.open(RegisterDialogComponent, dialogConfig);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    dialogRef.afterClosed().subscribe(
      data => this.httpClient.post(environment.baseUrl + `users/save`,
          '{ ' +
                '"username": "' + data.username + '",' +
                '"password": "' + data.password + '"' +
                '}', {headers: headers}
      ).subscribe()
    );
  }

}
