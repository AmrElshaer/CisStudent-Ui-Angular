import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
import { Posts } from './Posts';
@Injectable()
export class PostsServices implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudentPosts(): Observable<Posts[]>{
   
        return   this.http.get<Posts[]>('http://localhost:57761/api/Posts');
    }
    AddStudent(CisStudent: Posts) {
        this.http.post<Posts>('http://localhost:57761/api/Posts', CisStudent).subscribe(a => { console.log(a) });
    }
  
    getstudentPosts(id):Observable<Posts[]>{
    return this.http.get<Posts[]>('http://localhost:57761/api/Posts/'+id);
    }
    updateStudent(id,CisStudent:Posts){
        this.http.put<Posts>('http://localhost:57761/api/Posts/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    
}