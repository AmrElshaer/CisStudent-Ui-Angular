import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
@Injectable()
export class StudentProfileSercies implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudent(): Observable<CisStudentProfile[]>{
   
        return   this.http.get<CisStudentProfile[]>('http://localhost:57761/api/Profiles');
    }
    AddStudent(CisStudent: CisStudentProfile) {
        this.http.post<CisStudentProfile>('http://localhost:57761/api/Profiles', CisStudent).subscribe(a => { console.log(a) });
    }
  
    getstudentbyid(id):Observable<CisStudentProfile>{
    return this.http.get<CisStudentProfile>('http://localhost:57761/api/Profiles/'+id);
    }
    updateStudent(id,CisStudent:CisStudentProfile){
        this.http.put<CisStudentProfile>('http://localhost:57761/api/Profiles/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}