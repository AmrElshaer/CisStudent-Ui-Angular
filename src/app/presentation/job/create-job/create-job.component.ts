import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/core/domain/job';
import { JobService } from 'src/app/data/services/job.service';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styles: [
  ]
})
export class CreateJobComponent implements OnInit {

  jobGroup: FormGroup;
  studentId: number;
  errors: string[];
  jobId: number|null;
  froalaObject:Object;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private userService: UserService, private jobService: JobService, private activeRoute: ActivatedRoute) {

  }



  ngOnInit() {
    const user = this.userService.getUser();
    this.studentId = +user.id;
    this.InitBlog();
    this.UpdateBLog();
  }
  private InitBlog() {
    this.froalaObject ={ charCounterCount: false, placeholderText: 'Enter your Content', events :
     { 'froalaEditor.contentChanged' : (e, editor) => { this.jobGroup.patchValue({content: editor.html.get()})
    } } };
    this.jobGroup = this.formBuilder.group({
      technology: [''],
      place: [''],
      content: ['', Validators.required],
      contactUs: ['']

    });
  }
  private UpdateBLog() {
    this.activeRoute.paramMap.subscribe(rot => {
      const jobId = rot.get('id');
      if (jobId) {
        this.jobId = +jobId;
        this.GetBlog();
      }
    });
  }
  private GetBlog() {
      this.jobService.GetJob(this.jobId).subscribe(data => {
        this.jobGroup.patchValue(data);
      }, err => this.errors = ValidationHelper.GetErrors(err));
  }
  Save(job: Job) {
    if (this.jobId) {
      job.id = this.jobId;
    }
    job.cisStudentId = this.studentId;
    this.jobService.UpSrtJob(job).subscribe(jobId => {
    this.router.navigate([`/Job/All`]);
    }, err => this.errors = ValidationHelper.GetErrors(err));
  }
}
