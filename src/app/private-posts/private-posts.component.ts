import { Component, OnInit } from '@angular/core';
import { publicpostservices } from '../publicpostservices';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../Posts';
import { privatepostservices } from '../Privateservices';

@Component({
  selector: 'app-private-posts',
  templateUrl: './private-posts.component.html',
  styleUrls: ['./private-posts.component.css']
})
export class PrivatePostsComponent implements OnInit {

  Posts:Posts[];
  Id:string;
    constructor(private publicpost:privatepostservices,private activterouter:ActivatedRoute) {
  
     }
  
    ngOnInit() {
      this.activterouter.paramMap.subscribe(a=>{
       this.Id=a.get("Id");
      })
  this.publicpost.AllCisSTudentPostsprivate(this.Id).subscribe(a=>{
    if(a.every(a=>a.id==0)){
this.Posts=null;
    }
    else{
      this.Posts=a.filter(a=>a.id!=0);
    }
    
     
  });
    }

}
