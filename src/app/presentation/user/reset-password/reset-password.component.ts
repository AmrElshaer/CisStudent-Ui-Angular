import { Subscription } from 'rxjs';
import { UserService } from 'src/app/data/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [
  ]
})
export class ResetPasswordComponent implements OnInit {

  forgetPassword: FormGroup;
  errors: string[];
  showSuccessSend:boolean=false;
  constructor(private formBuilder: FormBuilder  , private userService: UserService) {

  }


  ngOnInit() {
   this.forgetPassword = this.formBuilder.group({email: ['', Validators.required]});
   this.errors = [];
  }

  ForgetPassword(user) {
    this.userService.ForgetPassword(user.email).subscribe( _ =>{
      this.showSuccessSend=true;
    } ,
    err => this.errors = ValidationHelper.GetErrors(err)
    );

  }

}
