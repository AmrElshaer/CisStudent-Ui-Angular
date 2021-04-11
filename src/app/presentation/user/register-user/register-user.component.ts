import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html'
})
export class RegisterUserComponent implements OnInit {
  userRegister: FormGroup;
  errors: string[];
  successfulSave: boolean;
  imageSrc: string;
  showConfirmMessage:boolean=false;
  constructor(private router: Router, private formbuilder: FormBuilder, private userSerivie: UserService) {
  }
  ngOnInit() {

    this.userRegister = this.formbuilder.group(
      {
        password: ['', Validators.required],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]]
      }

    );
    this.errors = [];
  }
  handleInputChange(imageInput: any) {
    const file = imageInput.dataTransfer ? imageInput.dataTransfer.files[0] : imageInput.target.files[0];
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }
  Save(user) {
    this.userSerivie.register(user.email, user.password, user.name, this.imageSrc).subscribe(
      () => this.showConfirmMessage=true,
      err => this.errors = ValidationHelper.GetErrors(err)

    );
  }
}
