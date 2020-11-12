import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../bookmark-dialog/bookmark-dialog.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass']
})
export class BookmarkCardComponent implements OnInit {

  @Input() bookmarks: any[];

  username: string;

  constructor(public dialog: MatDialog, public httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  saveUsername(user: string): void {
    this.username = user;
  }


  addBookmark(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'New Bookmark'
    };

    this.dialog.open(BookmarkDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(BookmarkDialogComponent, dialogConfig);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    dialogRef.afterClosed().subscribe(
      data => this.httpClient.post(`http://localhost:8080/bookmark/` + this.username + `/save`,
                                          '{ ' +
                                          '"username": "' + this.username + '",' +
                                          '"bookmarkName": "' + data.name + '",' +
                                          '"url": "' + data.url + '"' +
                                          '}', {headers: headers}

    ).subscribe()
    );
  }

  deleteBookmark(name: string): void {
    if (confirm('Are you sure you want to delete the ' + name + ' bookmark?')) {
      console.log('test');
    }
  }
}
