import { Injectable, OnInit } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CisStudent } from './CisStudent';
import { Observable } from 'rxjs';
import { CisStudentResponse } from './CIsSTudentResponse';
import { Register } from './Register';
import { CisStudentProfile } from './CisStudentProfile';
import { Posts } from './Posts';
import { Followus } from './Followus';
@Injectable()
export class followusservcies implements OnInit {
   
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
       
    }
    AllCisSTudentPosts(): Observable<Followus[]>{
   
        return   this.http.get<Followus[]>('http://localhost:57761/api/Followus');
    }
    AddStudent(CisStudent: Followus) {
        this.http.post<Followus>('http://localhost:57761/api/Followus', CisStudent).subscribe(a => { console.log(a) });
    }
  
    getstudentFollowus(id):Observable<Followus[]>{
    return this.http.get<Followus[]>('http://localhost:57761/api/Followus/'+id);
    }
    updateStudent(id,CisStudent:Followus){
        this.http.put<Followus>('http://localhost:57761/api/Followus/'+id,CisStudent).subscribe(a=>{console.log(a)});
    }
  
    Deletefollow(id){
        this.http.delete<Followus>('http://localhost:57761/api/Followus/'+id).subscribe(a=>{console.log(a)});
    }
    AccepFollows(id):Observable<Followus[]>{
        return this.http.get<Followus[]>('http://localhost:57761/api/Followus/allacceptedfollow/'+id);
        }
        AllFriends(id):Observable<Followus[]>{
            return this.http.get<Followus[]>('http://localhost:57761/api/Followus/allfriends/'+id);
            }
}