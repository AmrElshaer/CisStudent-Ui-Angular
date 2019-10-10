import { Component, OnInit, Input } from '@angular/core';
import { respnsetocomment } from '../responsetocomment';
import { CisStudentResponse } from '../CIsSTudentResponse';
import { StudentSercies } from '../Student.Services';
import { respnsetoresponse } from '../responsetoresponse';
import { Responsetoresponseservieces } from '../responsetoresponseservices';
declare var openmodel:any;
@Component({
  selector: 'app-responseforcomment',
  templateUrl: './responseforcomment.component.html',
  styleUrls: ['./responseforcomment.component.css']
})
export class ResponseforcommentComponent implements OnInit {
  
@Input()
responsetocomment:respnsetocomment;
allcisstudent:CisStudentResponse[];
allresponsetoresponse:respnsetoresponse[];
  responsetoresponsetoshow:string;
  responsetoresponsehref:string;
  @Input()
  Id:string;
  constructor(private Cisstudentservces:StudentSercies,private responsetoresponseservices:Responsetoresponseservieces) {

   }

  ngOnInit() {
    this.responsetoresponsehref="http://localhost:57761/ResponsetoResonse/Create?idofstudent="+this.Id+"&idofresponse=";
    this.Cisstudentservces.AllCisSTudent().subscribe(a=>{
      this.allcisstudent=a;
    });
  }
  allresponsetoresponsefun(id){
    
    this.responsetoresponsetoshow=null;
  this.responsetoresponseservices.getstudentPosts(id).subscribe(a=>{
    this.responsetoresponsetoshow=id;
  this.allresponsetoresponse=a;
  });
  }
}
