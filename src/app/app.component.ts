import { LoaderService } from './data/services/loader.service';
import { UserService } from './data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './core/domain/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
}
  ngOnInit(): void {
  }
}
