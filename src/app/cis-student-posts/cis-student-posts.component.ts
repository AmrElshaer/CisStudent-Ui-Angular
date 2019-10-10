import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../Posts';
import { CisStudentResponse } from '../CIsSTudentResponse';
import { CommentServces } from '../CommentServse';
import { StudentSercies } from '../Student.Services';

@Component({
  selector: 'app-cis-student-posts',
  templateUrl: './cis-student-posts.component.html',
  styleUrls: ['./cis-student-posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CisStudentPostsComponent implements OnInit {
@Input()
   post:Posts;
   commentsisempty:boolean=false;
  allcisstudent:CisStudentResponse[];
  allcomments: Comment[];
  Show:any;
  @Input()
  Id:string;
  commenthref:string;
  constructor(private Cistudentsercese:StudentSercies,private router:ActivatedRoute,private _commentservices:CommentServces) {
   
   
    if(location.pathname.includes("/AddPosts")){
      router.paramMap.subscribe(a=>{
        var Id= a.get('Id');
        location.href="http://localhost:57761/PostView/CreatePosts?id="+Id;
      });

    }

  }

  ngOnInit() {
    this.commenthref = "http://localhost:57761/Comments/Create?studentId="+this.Id+"&postId=";
    this.Cistudentsercese.AllCisSTudent().subscribe(a=>{this.allcisstudent=a;});
  }
  Show_Comments(id) {
    
    this.commentsisempty=false;
    this.Show = id;
      this.allcomments=null;
    this._commentservices.getstudentPosts(id).subscribe(a => {
     
      this.allcomments = a;
    
      if(this.allcomments.length==0){

this.commentsisempty=true;

      }
      
    });
  }
}
