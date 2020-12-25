import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder, private userSerivie: UserService) {

  }
  userRegister: FormGroup;
  ngOnInit() {

    this.userRegister = this.formbuilder.group(
      {
        password: ['', Validators.required],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        image: ['']
      }
        );

  }

  Save(user) {
    this.userSerivie.register(user.email, user.password, user.name, user.image).subscribe(
      response => this.router.navigate(['signIn'])

    );
  }
}
