import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/domain/profile';
import { ProfileRepository } from 'src/app/core/repositories/profile-repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends ProfileRepository {

  constructor(private http: HttpClient) {
    super();
  }
  GetProfile(studentId: number): Observable<Profile> {
    const url = `${this.baseUrl}/Profile/GetProfile?studentId=${studentId}`;
    return this.http.get<Profile>(url,this.options);
  }
  UpsrtProfile(profile: Profile): Observable<number> {
    const url = `${this.baseUrl}/Profile/UpSrtProfile`;
    return this.http.post<number>(url, profile, this.options);
  }

}
