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
@Injectable()
export class ApplyTrainingServices implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AddApplaying(Applay:ApplyTraining){
return this.http.post('http://localhost:57761/api/AppliesforTrainings',Applay);
    }
    AllTraining(id): Observable<ApplyTraining[]>{
   
        return   this.http.get<ApplyTraining[]>('http://localhost:57761/api/AppliesforTrainings/'+id);
    }
   
  
  udent(id,CisStudent:ApplyTraining){
        this.http.put<ApplyTraining>('http://localhost:57761/api/AppliesforTrainings/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}