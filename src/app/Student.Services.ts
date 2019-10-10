import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
@Injectable()
export class StudentSercies implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudent(): Observable<CisStudentResponse[]>{
   
        return   this.http.get<CisStudentResponse[]>('http://localhost:57761/api/CisStudents');
    }
    AddStudent(CisStudent: CisStudent) {
        this.http.post<CisStudent>('http://localhost:57761/api/CisStudents', CisStudent).subscribe(a => { console.log(a) });
    }
    addimagea(image) {
       
           
        this.http.post('http://localhost:57761/api/Image', image, {reportProgress: true, observe: 'events'}).subscribe(a=>{console.log(a)});
    }
    getstudentbyid(id):Observable<CisStudentResponse>{
    return this.http.get<CisStudentResponse>('http://localhost:57761/api/CisStudents/'+id);
    }
    updateStudent(CisStudent:CisStudentResponse){
        this.http.put<CisStudent>('http://localhost:57761/api/CisStudents/'+CisStudent.id,CisStudent).subscribe(a=>{console.log(a)});
    }
    CanRegister(register:Register):Observable<CisStudentResponse>{
      return this.http.post<CisStudentResponse>('http://localhost:57761/api/Register',register);
    }
    
}