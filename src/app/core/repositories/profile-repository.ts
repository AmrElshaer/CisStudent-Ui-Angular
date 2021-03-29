import { Profile } from 'src/app/core/domain/profile';
import { Observable } from 'rxjs';
import { BaseRepository } from './base-repository';

export abstract class ProfileRepository extends BaseRepository {
  abstract UpsrtProfile(profile: Profile): Observable<number>;
  abstract GetProfile(studentId: number): Observable<Profile>;
  abstract GetProfiles(search: string): Observable<Profile[]>;
}
