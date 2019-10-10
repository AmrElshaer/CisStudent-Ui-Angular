import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentProfileSercies } from '../CisStudentProfileServices';
import { CisStudentProfile } from '../CisStudentProfile';
import { PostsServices } from '../PostsServices';
import { Posts } from '../Posts';
import { CommentServces } from '../CommentServse';
import { StudentSercies } from '../Student.Services';
import { CisStudent } from '../CisStudent';
import { CisStudentResponse } from '../CIsSTudentResponse';
import { respnsetocomment } from '../responsetocomment';
import { Responsetocommentservieces } from '../ResponseToCommentServices';
import { respnsetoresponse } from '../responsetoresponse';
import { Responsetoresponseservieces } from '../responsetoresponseservices';
import { Followus } from '../Followus';
import { followusservcies } from '../followusservcies';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class StudentPageComponent implements OnInit {
  Id: string;
  CisStudentProfile: CisStudentProfile;
  Haveprofile: boolean;
  Posts: Posts[];
  commenthref: string;
 StudentAsVisited:string;
 FollowText:string;
 AllFollowus:Followus[];
 
  allcisstudent:CisStudentResponse[];
  responsetocommenthref:string;
  
  responsetoresponsehref:string;
 test:string;
AllFollows:Followus[];
allacceptablefollows:Followus[];
  constructor(private followusservcie:followusservcies,private responsetoresponseservices:Responsetoresponseservieces,private responsetocommentservices:Responsetocommentservieces,private Cisstudentservces:StudentSercies,private _commentservices: CommentServces, private _ActivateRouter: ActivatedRoute, private profileservices: StudentProfileSercies, private Postservices: PostsServices) {
   
  }
  ngOnInit() {

   this.FollowText="Follow";
    this._ActivateRouter.paramMap.subscribe(a => {
      this.Id = a.get('Id');

      this.StudentAsVisited=a.get('AsVisited');
      this.commenthref = "http://localhost:57761/Comments/Create?studentId="+this.Id+"&postId=";
      
      this.profileservices.getstudentbyid(this.Id).subscribe(a => {
        if (a != null) {
          console.log(a);
          this.Haveprofile = true;
          this.CisStudentProfile = a;
        }
        else {
          this.Haveprofile = false;
          this.CisStudentProfile = null;
        }
      });
      this.Postservices.getstudentPosts(this.Id).subscribe(a => {
        this.Posts = a;
        console.log(a+"posts id");
      });
      this.Cisstudentservces.AllCisSTudent().subscribe(a=>{
        this.allcisstudent=a;
      });
       this.followusservcie.AllCisSTudentPosts().subscribe(a=>{
      
      this.AllFollowus=a;
      this._ActivateRouter.paramMap.subscribe(f => {
        
        var recever=f.get('Id');
        
       var sender=f.get("currentstudent");
       
       
     var idtodeletefollow=this.AllFollowus.find(x=>x.recever==recever&&x.sender==sender);
     
    if(idtodeletefollow){
      console.log("UnFollow");
this.FollowText="UnFollow";

    }
    else{
      console.log("Follow");
      this.FollowText="Follow";
    }
       });
    
    
    });
    });

  }
  AllNotification(){
   
    this._ActivateRouter.paramMap.subscribe(a=>{
      this.Id=a.get("Id");
      console.log("follow"+this.Id);
      if(this.Id){
  this.followusservcie.getstudentFollowus(this.Id).subscribe(
    a=>{
      this.AllFollows=a;
      this.followusservcie.AccepFollows(this.Id).subscribe(a=>{
        this.allacceptablefollows=a;
      });
    }
  );
      }
      
      });
  }
  getrightimage(image:string):string{

return image;
  }
 
  follow(){
    if(this.FollowText=="Follow"){
      this._ActivateRouter.paramMap.subscribe(a => {
        var follow:Followus=new Followus();
        follow.recever=a.get('Id');
        follow.accept="false";
        follow.sender=a.get("currentstudent");
        this.followusservcie.AddStudent(follow);
        this.FollowText="UnFollow";
        for(var item of this.AllFollowus){
console.log(item.id);
        }
       });
    }
   else{
    this.followusservcie.AllCisSTudentPosts().subscribe(a=>{
      
      this.AllFollowus=a;
      this._ActivateRouter.paramMap.subscribe(a => {
        
        var recever=a.get('Id');
        
       var sender=a.get("currentstudent");
       
        this.FollowText="Follow";
     var idtodeletefollow=this.AllFollowus.find(a=>a.recever==recever&&a.sender==sender).id;
     
     this.followusservcie.Deletefollow(idtodeletefollow);
       });
    
    
    });
   }
  }
  accept(i:Followus){
   var objfollow:Followus=i;
   objfollow.accept="true";
   this.followusservcie.updateStudent(objfollow.id,objfollow);
this.test="Now Your Are Friend"
  }
  unaccept(i:Followus){
    var objfollow:Followus=i;
    objfollow.accept="false";
    this.followusservcie.updateStudent(objfollow.id,objfollow);
 this.test="Now No Friend"
   }
}
