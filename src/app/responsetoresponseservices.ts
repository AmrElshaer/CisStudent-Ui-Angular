import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
import { Posts } from './Posts';
import { delay } from 'rxjs/operators';
import { respnsetocomment } from './responsetocomment';
import { respnsetoresponse } from './responsetoresponse';
@Injectable()
export class Responsetoresponseservieces implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudentPosts(): Observable<respnsetoresponse[]>{
   
        return   this.http.get<respnsetoresponse[]>('http://localhost:57761/api/responsetorespones');
    }
  
  
    getstudentPosts(id):Observable<respnsetoresponse[]>{
    return this.http.get<respnsetoresponse[]>('http://localhost:57761/api/responsetorespones/'+id);
    }
    updateStudent(id,CisStudent:respnsetoresponse){
        this.http.put<respnsetoresponse>('http://localhost:57761/api/responsetorespones/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}