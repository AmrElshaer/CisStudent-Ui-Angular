import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/core/domain/job';
import { JobService } from 'src/app/data/services/job.service';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styles: [
  ]
})
export class AllJobsComponent implements OnInit {

  jobs: Job[];
  errors: string[];
 constructor(private jobService: JobService, private userService: UserService) { }

 ngOnInit() {
   const user = this.userService.getUser();
   this.jobService.GetJobs(+user.id).subscribe(data => this.jobs = data,
     err => this.errors = ValidationHelper.GetErrors(err));
 }

}
