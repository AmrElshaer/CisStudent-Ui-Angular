import { Subscription } from 'rxjs';
import { UserService } from 'src/app/data/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styles: [
  ]
})
export class EmailConfirmationComponent implements OnInit,OnDestroy {
  errors: string[];
  showConfirm:boolean=false;
  constructor(private route: Router, private router: ActivatedRoute,private userService:UserService) { }
  ngOnDestroy(): void {
    this.emailConfirmationSub.unsubscribe();
  }
 emailConfirmationSub:Subscription;
  ngOnInit(): void {
    this.router.paramMap.subscribe(rot =>{
      const token = this.router.snapshot.queryParams['token'];
      const email = this.router.snapshot.queryParams['email'];
       this.emailConfirmationSub= this.userService.ConfirmEmail(email,token).subscribe(()=>this.showConfirm=true,err =>
       this.errors = ValidationHelper.GetErrors(err));
      });
  }

}
