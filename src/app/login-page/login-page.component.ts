import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  users: any[];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.data.pipe(map(data => data.pageData))
      .subscribe((data: any) => {
        this.users = data;
      });
  }

  processUser(username: string): void {
    if (this.users.find(element => element.username === username) === undefined) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.httpClient.post(`http://localhost:8080/users/save`, '{"username": "' + username + '", "bookmarks": true}', {headers: headers})
        .subscribe();
    }
    this.router.navigate(['./home/' + username]);
  }

}
