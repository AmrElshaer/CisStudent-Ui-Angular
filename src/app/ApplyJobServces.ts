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
import { ApplyTraining } from './ApplyTraining';
import { ApplyJob } from './ApplyJob';
@Injectable()
export class ApplyJobServices implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AddApplaying(Applay:ApplyJob){
return this.http.post('http://localhost:57761/api/ApplyJobs',Applay);
    }
    AllTraining(id): Observable<ApplyJob[]>{
   
        return   this.http.get<ApplyJob[]>('http://localhost:57761/api/ApplyJobs/'+id);
    }
   
  
  udent(id,CisStudent:ApplyJob){
        this.http.put<ApplyJob>('http://localhost:57761/api/ApplyJobs/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}