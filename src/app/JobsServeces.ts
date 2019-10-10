import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
import { Posts } from './Posts';
import { delay } from 'rxjs/operators';
import { Training } from './Training';
import { Jobs } from './Jobs';
@Injectable()
export class JobsServeces implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllTraining(id): Observable<Jobs[]>{
   
        return   this.http.get<Jobs[]>('http://localhost:57761/api/Jobs/'+id);
    }
   
  
    AllPublishTaing(id):Observable<Jobs[]>{
    return this.http.get<Jobs[]>('http://localhost:57761/api/Jobs/AllPublish/'+id);
    }
    updateStudent(id,CisStudent:Jobs){
        this.http.put<Jobs>('http://localhost:57761/api/Jobs/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}