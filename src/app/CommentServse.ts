import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
import { Posts } from './Posts';
import { delay } from 'rxjs/operators';
@Injectable()
export class CommentServces implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudentPosts(): Observable<Comment[]>{
   
        return   this.http.get<Comment[]>('http://localhost:57761/api/CommentApi');
    }
    AddStudent(CisStudent: Posts) {
        this.http.post<Posts>('http://localhost:57761/api/CommentApi', CisStudent).subscribe(a => { console.log(a) });
    }
  
    getstudentPosts(id):Observable<Comment[]>{
    return this.http.get<Comment[]>('http://localhost:57761/api/CommentApi/'+id).pipe(delay(1000));
    }
    updateStudent(id,CisStudent:Comment){
        this.http.put<Comment>('http://localhost:57761/api/CommentApi/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}