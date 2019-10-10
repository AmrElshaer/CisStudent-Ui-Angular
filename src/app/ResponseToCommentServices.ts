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
@Injectable()
export class Responsetocommentservieces implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudentPosts(): Observable<respnsetocomment[]>{
   
        return   this.http.get<respnsetocomment[]>('http://localhost:57761/api/ResponsetoCommentApi');
    }
  
  
    getstudentPosts(id):Observable<respnsetocomment[]>{
    return this.http.get<respnsetocomment[]>('http://localhost:57761/api/ResponsetoCommentApi/'+id);
    }
    updateStudent(id,CisStudent:respnsetocomment){
        this.http.put<respnsetocomment>('http://localhost:57761/api/ResponsetoCommentApi/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}