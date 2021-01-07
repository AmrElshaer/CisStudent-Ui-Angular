import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/core/domain/job';
import { JobService } from 'src/app/data/services/job.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styles: [
  ]
})
export class JobDetailsComponent implements OnInit {

  jobId: number;
  job: Job;
  errors: string[];
  constructor(private rote: Router, private router: ActivatedRoute, private jobService: JobService) {

   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(rot => this.jobId = +rot.get('id'));
    this.jobService.GetJob(this.jobId).subscribe(res => this.job = res, err =>
      this.errors = ValidationHelper.GetErrors(err));
  }

  DeleteJob() {
    this.jobService.DeleteJob(this.jobId).subscribe(() => this.rote.navigate(['/Blog/All']),
     err => this.errors = ValidationHelper.GetErrors(err));
  }

}
