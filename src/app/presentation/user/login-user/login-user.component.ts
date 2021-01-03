import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/data/services/user.service';
import { Route } from '@angular/compiler/src/core';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnInit {

  userLogin: FormGroup;
  errors: string[];
  constructor(private formBuilder: FormBuilder  , private userService: UserService, private router: Router) {

  }

  ngOnInit() {
   this.userLogin = this.formBuilder.group({email: ['', Validators.required], password: ['', Validators.required]});
   this.errors = [];
  }

  login(user) {
    this.userService.login(user.email, user.password).subscribe( () => this.router.navigate(['/']),
    err => this.errors = ValidationHelper.GetErrors(err)
    );

  }

}
