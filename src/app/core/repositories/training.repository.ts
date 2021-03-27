import { Observable } from 'rxjs';
import { Training } from './../domain/training';
import { BaseRepository } from './base-repository';

export abstract class  TrainingRepository extends BaseRepository {
  abstract UpSrtTraining(training: Training): Observable<number>;
  abstract GetTraining(trainingId: number): Observable<Training>;
  abstract DeleteTraining(trainingId: number): Observable<void>;
  abstract GetTrainings(studentId?:number): Observable<Training[]>;
}
