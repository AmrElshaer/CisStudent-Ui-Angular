import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';
import { MustMatch } from '../../common/validation/matchPassword';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [
  ]
})
export class ChangePasswordComponent implements OnInit {

  changePassword: FormGroup;
  errors: string[];
  email:string;
  token:string;
  constructor(private formBuilder: FormBuilder  , private userService: UserService,private activeRouter:ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
   this.changePassword = this.formBuilder.group({confirmPassword: ['', Validators.required],
    password: ['', Validators.required]},{
      validator: MustMatch('password', 'confirmPassword')
  });
    this.activeRouter.paramMap.subscribe(rot =>{
      this.token = this.activeRouter.snapshot.queryParams['token'];
       this.email = this.activeRouter.snapshot.queryParams['email'];
    });
   this.errors = [];
  }

  PasswordChange(passwordform) {
    this.userService.ChangePassword(this.email, this.token,passwordform.password).subscribe( _ =>{
      this.router.navigate(['signIn']);
    } ,
    err => this.errors = ValidationHelper.GetErrors(err)
    );

  }

}
