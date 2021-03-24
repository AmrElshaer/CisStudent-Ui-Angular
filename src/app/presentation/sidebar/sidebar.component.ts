import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/domain/user';
import { UserService } from 'src/app/data/services/user.service';
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/',     title: 'Home',         icon:'fas fa-home',       class: '' },
  {path:'/Profile',title:'Profile',icon:'far fa-user',class:''},
  { path: '/Blog/All',         title: 'Blogs',             icon:'fas fa-blog',    class: '' },
  { path: '/Training/All', title: 'Training',     icon:'fas fa-users-cog',    class: '' },
  { path: '/Job/All',          title: 'Jobs',      icon:'fas fa-briefcase',  class: '' },
];
@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarLayoutComponent implements OnInit {
  user: User;
  Authorize = false;
  public menuItems: any[];
  constructor(private router: Router, private userSerivce: UserService) {
  }
  ngOnInit() {
    if (this.userSerivce.isLoggedIn()) {
      this.Authorize = true;
      this.user = this.userSerivce.getUser();
    }
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['signIn']);
  }
}
