import { Training } from './../../../core/domain/training';
import { TrainingService } from './../../../data/services/training.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationHelper } from '../../common/ValidationHelper';
@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styles: []
})
export class CreateTrainingComponent implements OnInit {

  trainingGroup: FormGroup;
  studentId: number;
  errors: string[];
  trainingId: number|null;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private userService: UserService, private trainingService: TrainingService, private activeRoute: ActivatedRoute) {

  }



  ngOnInit() {
    const user = this.userService.getUser();
    this.studentId = +user.id;
    this.InitBlog();
    this.UpdateBLog();
  }
  private InitBlog() {
    this.trainingGroup = this.formBuilder.group({
      technology: [''],
      place: [''],
      content: ['', Validators.required],

    });
  }
  private UpdateBLog() {
    this.activeRoute.paramMap.subscribe(rot => {
      const trainingId = rot.get('id');
      if (trainingId) {
        this.trainingId = +trainingId;
        this.GetBlog();
      }
    });
  }
  private GetBlog() {
      this.trainingService.GetTraining(this.trainingId).subscribe(data => {
        this.trainingGroup.patchValue(data);
      }, err => this.errors = ValidationHelper.GetErrors(err));
  }
  Save(training: Training) {
    if (this.trainingId) {
      training.id = this.trainingId;
    }
    training.cisStudentId = this.studentId;
    this.trainingService.UpSrtTraining(training).subscribe(trainingId => {
    this.router.navigate([`Training/All`]);
    }, err => this.errors = ValidationHelper.GetErrors(err));
  }
}
