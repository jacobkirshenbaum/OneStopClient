import {
  ActivatedRouteSnapshot,
  Params,
  Resolve,
  Router
} from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginPageResolver implements Resolve<any> {
  constructor(private httpClient: HttpClient, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return undefined;
  }
}
