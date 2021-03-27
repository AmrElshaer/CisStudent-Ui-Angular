import { Training } from './../../core/domain/training';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingRepository } from 'src/app/core/repositories/training.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService extends TrainingRepository {


  constructor(private http: HttpClient) {
    super();

  }
  GetTrainings(studentId?: number): Observable<Training[]> {
    const url=studentId?`${this.baseUrl}/Training/GetAllTraining?studentId=${studentId}`:
    `${this.baseUrl}/Training/GetAllTraining`;
    return this.http.get<Training[]>(url, this.options);
  }
  UpSrtTraining(training: Training): Observable<number> {
    const url = `${this.baseUrl}/Training/UpSrtTraining`;
    return this.http.post<number>(url, training, this.options);
  }
  GetTraining(trainingId: number): Observable<Training> {
    const url = `${this.baseUrl}/Training/GetTraining?id=${trainingId}`;
    return this.http.get<Training>(url, this.options);
  }
  DeleteTraining(trainingId: number): Observable<void> {
    const url = `${this.baseUrl}/Training/DeleteTraining?id=${trainingId}`;
    return this.http.delete<void>(url, this.options);
  }
}
