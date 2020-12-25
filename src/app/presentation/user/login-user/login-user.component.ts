import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/data/services/user.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogin: FormGroup;
  constructor(private formBuilder: FormBuilder  , private userService: UserService, private router: Router) {

  }

  ngOnInit() {
   this.userLogin = this.formBuilder.group({email: ['', Validators.required], password: ['', Validators.required]});
  }

  login(user) {
    this.userService.login(user.email, user.password).subscribe( response => {
        this.router.navigate(['/']);
    }


    );

  }

}
