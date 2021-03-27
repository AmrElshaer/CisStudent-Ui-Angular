import { Observable } from 'rxjs';
import { Job } from './../domain/job';
import { BaseRepository } from './base-repository';

export abstract class  JobRepository extends BaseRepository {
  abstract UpSrtJob(job: Job): Observable<number>;
  abstract GetJob(jobId: number): Observable<Job>;
  abstract DeleteJob(jobId: number): Observable<void>;
  abstract GetJobs(studentId?: number): Observable<Job[]>;
}
