import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseToResponse } from 'src/app/core/domain/ResponseToResponse';
import { ResponseToResponseRepository } from 'src/app/core/repositories/resTores-repository';

@Injectable({
  providedIn: 'root'
})
export class ResToresService extends ResponseToResponseRepository {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();

  }
  InsertResToRes(resTores: ResponseToResponse): Observable<number> {
    const url = `${this.baseUrl}/ResposneToResp/InsertResponseToComment`;
    return this.http.post<number>(url, resTores, this.options);
  }

}
