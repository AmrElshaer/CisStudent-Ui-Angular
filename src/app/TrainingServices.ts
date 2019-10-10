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
@Injectable()
export class TrainingServices implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllTraining(id): Observable<Training[]>{
   
        return   this.http.get<Training[]>('http://localhost:57761/api/Tainings1/'+id);
    }
   
  
    AllPublishTaing(id):Observable<Training[]>{
    return this.http.get<Training[]>('http://localhost:57761/api/Tainings1/AllPublish/'+id);
    }
    updateStudent(id,CisStudent:Training){
        this.http.put<Training>('http://localhost:57761/api/Tainings1/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}