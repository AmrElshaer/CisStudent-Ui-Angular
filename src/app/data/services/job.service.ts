import { Job } from './../../core/domain/job';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobRepository } from 'src/app/core/repositories/job-repository';

@Injectable({
  providedIn: 'root'
})
export class JobService extends JobRepository {


  constructor(private http: HttpClient) {
    super();

  }
  GetJobs(studentId?: number): Observable<Job[]> {
    const url =studentId? `${this.baseUrl}/Job/GetAllJob?studentId=${studentId}`:
    `${this.baseUrl}/Job/GetAllJob`;
    return this.http.get<Job[]>(url, this.options);
  }
  UpSrtJob(job: Job): Observable<number> {
    const url = `${this.baseUrl}/Job/UpSrtJob`;
    return this.http.post<number>(url, job, this.options);
  }
  GetJob(jobId: number): Observable<Job> {
    const url = `${this.baseUrl}/Job/GetJob?id=${jobId}`;
    return this.http.get<Job>(url, this.options);
  }
  DeleteJob(jobId: number): Observable<void> {
    const url = `${this.baseUrl}/Job/DeleteJob?id=${jobId}`;
    return this.http.delete<void>(url, this.options);
  }
}
