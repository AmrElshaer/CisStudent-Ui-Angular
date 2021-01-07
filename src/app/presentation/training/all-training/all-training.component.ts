import { Training } from './../../../core/domain/training';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../../common/ValidationHelper';
import { TrainingService } from 'src/app/data/services/training.service';

@Component({
  selector: 'app-all-training',
  templateUrl: './all-training.component.html',
  styles: []
})
export class AllTrainingComponent implements OnInit {
   trainings: Training[];
   errors: string[];
  constructor(private trainingService: TrainingService, private userService: UserService) { }

  ngOnInit() {
    const user = this.userService.getUser();
    this.trainingService.GetTrainings(+user.id).subscribe(data => this.trainings = data,
      err => this.errors = ValidationHelper.GetErrors(err));
  }

}
