import { UserService } from 'src/app/data/services/user.service';
import { Profile } from 'src/app/core/domain/profile';
import { ProfileService } from './../../../data/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationHelper } from '../../common/ValidationHelper';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html'
})
export class CreateProfileComponent implements OnInit {
  errors: string[];
  studentId: number;
  profileId: number;
  profileGroup: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder
    ,         private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.InitForm();
    this.studentId = +this.userService.getUser().id;
    this.profileService.GetProfile(this.studentId).subscribe(
     data => {this.AppendProfile(data);});
  }
  private InitForm() {
    this.profileGroup = this.formBuilder.group({
      colleage: [''], university: [''],city:[''],
      age: [''], experience: [''], language: [''], programing_Language: [''], carear: [''], appreciation: [''],
      company: ['' ], addition: [''], cisStudentId: [''], kind: [''],id:['']
    });
  }

  AppendProfile(profile: Profile): void {

    this.profileId = profile.id;
    this.profileGroup.patchValue({
      colleage:profile.colleage, university: profile.university,city:profile.city,
      age: profile.age, experience: profile.experience, language: profile.language, programing_Language: profile.programing_Language, carear: profile.carear, appreciation: profile.appreciation,
      company: profile.company, addition: profile.addition, cisStudentId: profile.cisStudentId, kind: profile.kind,id:profile.id
    });

     console.log(this.profileGroup.value);
  }
  Save(profile: Profile) {
    console.log(profile);
    if (profile) {
      profile.id = this.profileId;
      profile.cisStudentId = this.studentId;
      this.profileService.UpsrtProfile(profile).subscribe(
      () => this.router.navigate(['/StudentProfile/'+this.studentId]),
      err => this.errors = ValidationHelper.GetErrors(err));
    }
  }
}
