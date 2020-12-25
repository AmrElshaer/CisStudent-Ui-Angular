import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRepository } from 'src/app/core/repositories/user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends UserRepository  {

  constructor(private http: HttpClient) {
    super();

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
  login(email: string, password: string): Observable<void> {
    const url = `${this.baseUrl}/Account/Login`;
    const body = {
      Email: email,
      Password: password,
    };
    return this.http.post<{token}>(url, body).pipe(map(result => {
      localStorage.setItem('auth_token', result.token);
    }));
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authtoken');
    if (token) {return true; }
    return false;


  }

}
