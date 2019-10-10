import { Component, OnInit } from '@angular/core';
import { publicpostservices } from '../publicpostservices';
import { Posts } from '../Posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-post',
  templateUrl: './public-post.component.html',
  styleUrls: ['./public-post.component.css']
})
export class PublicPostComponent implements OnInit {
Posts:Posts[];
Id:string;
  constructor(private publicpost:publicpostservices,private activterouter:ActivatedRoute) {

   }

  ngOnInit() {
    this.activterouter.paramMap.subscribe(a=>{
     this.Id=a.get("Id");
    })
this.publicpost.AllCisSTudentPosts().subscribe(a=>{
  this.Posts=a;
});
  }

}
