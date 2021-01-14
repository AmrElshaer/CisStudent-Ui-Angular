import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Follow } from 'src/app/core/domain/follow';
import { FollowRepository } from 'src/app/core/repositories/follow-repository';

@Injectable({
  providedIn: 'root'
})
export class FollowService extends FollowRepository {
  constructor(private http: HttpClient) {
    super();

  }
  HaveFollow(haveFollow: { SendId: any; ReceiveId: any; }): Observable<Follow> {
    const url = `${this.baseUrl}/Follow/HaveFollow`;
    return this.http.post<Follow>(url, haveFollow, this.options);
  }

  GetFollows(studentId: number): Observable<Follow[]> {
    const url = `${this.baseUrl}/Follow/GetAllFollow?studentId=${studentId}`;
    return this.http.get<Follow[]>(url, this.options);
  }
  UpSrtFollow(follow: Follow): Observable<number> {
    const url = `${this.baseUrl}/Follow/UpSrtFollow`;
    return this.http.post<number>(url, follow, this.options);
  }
  GetFollow(followId: number): Observable<Follow> {
    const url = `${this.baseUrl}/Follow/GetFollow?id=${followId}`;
    return this.http.get<Follow>(url, this.options);
  }
  DeleteFollow(followId: number): Observable<void> {
    const url = `${this.baseUrl}/Follow/DeleteFollow?id=${followId}`;
    return this.http.delete<void>(url, this.options);
  }
}
