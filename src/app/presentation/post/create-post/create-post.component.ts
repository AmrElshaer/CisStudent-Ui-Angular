import { Post } from './../../../core/domain/post';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: []
})
export class CreatePostComponent implements OnInit {
  content: string = '<p>Some html</p>';
  config: any = {
    allowedContent: true,
    toolbar: [['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Link', '-', 'CreatePlaceholder']],
    removePlugins: 'elementspath',
    resize_enabled: false,
    extraPlugins: 'font,divarea,placeholder',
    contentsCss: ["body {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}"],
    autoParagraph: false,
    enterMode: 2
  };
  postGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
   this.postGroup=this.formBuilder.group({title:['',Validators.required],
  content:['',Validators.required],isPrivate:[''],technology:['']});
  }

  ngOnInit() {
  }
  Save(post:Post){
   console.log(post);
  }
}
