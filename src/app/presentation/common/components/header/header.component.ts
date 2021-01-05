import { User } from 'src/app/core/domain/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user: User;
  Authorize = false;
  constructor(private router: Router, private userSerivce: UserService) {
}

  ngOnInit(): void {
    if (this.userSerivce.isLoggedIn()) {
      this.Authorize = true;
      this.user = this.userSerivce.getUser();
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['signIn']);
  }

}
