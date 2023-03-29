import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(params: Login): Observable<any> {
    const { email, password } = params;
    if (email === Credentials.email && password === Credentials.password) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
