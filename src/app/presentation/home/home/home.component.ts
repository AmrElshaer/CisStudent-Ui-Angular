import { UserService } from './../../../data/services/user.service';
import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { Component, OnInit } from '@angular/core';
import { ValidationHelper } from '../../common/ValidationHelper';
import { Job } from 'src/app/core/domain/job';
import { JobService } from 'src/app/data/services/job.service';
import { Training } from 'src/app/core/domain/training';
import { TrainingService } from 'src/app/data/services/training.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  posts: Post[];
  jobs: Job[];
  trainings: Training[];
  errors: string[];
  isEmojiPickerVisible: boolean;
  constructor(private jobService: JobService,private postService: PostService,
    private trainingService: TrainingService,private userServce:UserService) { }

  ngOnInit() {
     this.postService.GetStudentsPosts().subscribe(data => this.posts = data,
      err => this.errors = ValidationHelper.GetErrors(err));
      this.jobService.GetJobs().subscribe(data => this.jobs = data,
        err => this.errors = ValidationHelper.GetErrors(err));
        this.trainingService.GetTrainings().subscribe(data => this.trainings = data,
          err => this.errors = ValidationHelper.GetErrors(err));
  }
  public addEmoji(event) {
    console.log(event.emoji.native);
    this.isEmojiPickerVisible = false;
 }
}
