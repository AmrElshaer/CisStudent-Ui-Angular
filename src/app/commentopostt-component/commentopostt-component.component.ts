import { Component, OnInit, Input } from '@angular/core';
import { StudentSercies } from '../Student.Services';
import { CisStudent } from '../CisStudent';
import { CisStudentResponse } from '../CIsSTudentResponse';
import { respnsetocomment } from '../responsetocomment';
import { Responsetocommentservieces } from '../ResponseToCommentServices';
declare var closedialogjs:any;
@Component({
  selector: 'app-commentopostt-component',
  templateUrl: './commentopostt-component.component.html',
  styleUrls: ['./commentopostt-component.component.css']
})
export class CommentoposttComponentComponent implements OnInit {
@Input()
comment:Comment;
@Input()
Id:string;
allcisstudent:CisStudentResponse[];
responsecommenttoshow:string;
  allresponsecomment:respnsetocomment[];
  responsetocommenthref:string;
  
  constructor(private Cisstudentservces:StudentSercies,private responsetocommentsercices:Responsetocommentservieces) {
    
   }
 
  ngOnInit() {
  
    this.responsetocommentsercices.AllCisSTudentPosts().subscribe(a=>{
     
        this.allresponsecomment=a;
      
      });
    this.responsetocommenthref="http://localhost:57761/ResponsetoComments/Create?idofstudent="+this.Id+"&idofcomment=";
    this.Cisstudentservces.AllCisSTudent().subscribe(a=>{
      this.allcisstudent=a;
    });
  }
showresponsetocomment(id){
  this.allresponsecomment=null;
this.responsetocommentsercices.getstudentPosts(id).subscribe(a=>{
  this.responsecommenttoshow=id;
  this.allresponsecomment=a;
});
}
closedialog(){
this.responsecommenttoshow="-1";
}
}
