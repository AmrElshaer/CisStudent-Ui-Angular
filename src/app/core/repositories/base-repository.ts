import { HttpHeaders } from '@angular/common/http';

export abstract class BaseRepository {
  protected baseUrl = 'http://localhost:5000/api';
  protected  options = {
    headers: new HttpHeaders().set( 'Authorization',`Bearer ${localStorage.getItem('auth_token')}`)
  };
}
