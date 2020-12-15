import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentSercies } from 'src/app/Student.Services';
import { Register } from 'src/app/Register';
import { CisStudentResponse } from 'src/app/CIsSTudentResponse';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
StudentRegister:FormGroup;
  constructor(private formBuilder:FormBuilder  ,private stdServices:StudentSercies) { 

  }

  ngOnInit() {
   this.StudentRegister=this.formBuilder.group({studentEmail:['',Validators.required],password:['',Validators.required]});
  }

  Register(Registerstudent:Register){
this.stdServices.CanRegister(Registerstudent).subscribe(a=>{
  if(a!=null){
localStorage.setItem("Authorize","true");
this.stdServices.AllCisSTudent().subscribe(a=>{
 var studentimage= a.find(a=>a.studentEmail==Registerstudent.studentEmail&&a.password==Registerstudent.password);
 if(studentimage){
 var studentimage:CisStudentResponse= a.find(a=>a.studentEmail==Registerstudent.studentEmail&&a.password==Registerstudent.password);
 
 if(studentimage){
  var imageurl=studentimage.studentImage.split('\\');

  window.localStorage.setItem("Image",imageurl[imageurl.length-1]);

 }
 

    location.href="/HomePage/"+studentimage.id;
 
  

  
 }
});

  }
  else{
    localStorage.setItem("Authorize","false");
  }
});

  }
}
