import { User } from './../domain/user';
import { Observable } from 'rxjs';
import { BaseRepository } from './base-repository';

export abstract class UserRepository extends BaseRepository {
  abstract  register(email: string, password: string, name: string, image: string): Observable<void>;
  abstract  login(email: string, password: string): Observable<{token,image}>;
  abstract isLoggedIn(): boolean;
  abstract getUser(): User;
}
