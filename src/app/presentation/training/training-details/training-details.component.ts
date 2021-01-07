import { Training } from './../../../core/domain/training';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { ValidationHelper } from '../../common/ValidationHelper';
import { TrainingService } from 'src/app/data/services/training.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styles: [
  ]
})
export class TrainingDetailsComponent implements OnInit {
  trainingId: number;
  training: Training;
  errors: string[];
  constructor(private rote: Router, private router: ActivatedRoute, private trainingService: TrainingService) {

   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(rot => this.trainingId = +rot.get('id'));
    this.trainingService.GetTraining(this.trainingId).subscribe(res => this.training = res, err =>
      this.errors = ValidationHelper.GetErrors(err));
  }

  DeleteTraining() {
    this.trainingService.DeleteTraining(this.trainingId).subscribe(() => this.rote.navigate(['/Blog/All']),
     err => this.errors = ValidationHelper.GetErrors(err));
  }
}
