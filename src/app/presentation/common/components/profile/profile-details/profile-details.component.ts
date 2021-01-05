import { Profile } from 'src/app/core/domain/profile';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { ProfileService } from 'src/app/data/services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styles: []
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile;
  userImage:string;
  constructor(private userService: UserService, private profileService: ProfileService) { }

  ngOnInit() {
    const  student= this.userService.getUser();
    this.userImage=student.image;
    this.profileService.GetProfile(+student.id).subscribe(
     data => this.profile = data);
  }


}
