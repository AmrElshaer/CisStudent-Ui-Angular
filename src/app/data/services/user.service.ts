import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/domain/user';
import { UserRepository } from 'src/app/core/repositories/user-repository';
import jwt_decode from '../../../../node_modules/jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService  extends UserRepository  {
   authKey = 'auth_token';
  constructor(private http: HttpClient, private router: Router) {
    super();
  }
  getUser(): User {
    const token = localStorage.getItem(this.authKey);
    const decoded: User = jwt_decode(token);
    const image = localStorage.getItem('image');
    decoded.image = image;
    return decoded;
  }
  register(email: string, password: string, name: string, image: string): Observable<void> {
    const url = `${this.baseUrl}/Account/Register`;
    const body = {
      Email: email,
      Password: password,
      Name: name,
      Image: image
    };
    return this.http.post<void>(url, body);

  }
  login(email: string, password: string): Observable<{token, image}> {
    const url = `${this.baseUrl}/Account/Login`;
    const body = {
      Email: email,
      Password: password,
    };
    return this.http.post<{token, image}>(url, body);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.authKey);
    if (token) {return true; }
    return false;
  }

}
