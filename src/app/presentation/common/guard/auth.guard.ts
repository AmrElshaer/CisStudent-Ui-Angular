import { UserService } from 'src/app/data/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) {


  }
  canActivate(): boolean {
    if (this.userService.isLoggedIn) {
       return true;
    }
    return false;
  }

}
