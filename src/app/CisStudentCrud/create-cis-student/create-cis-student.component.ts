import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CisStudent } from 'src/app/CisStudent';
import { StudentSercies } from 'src/app/Student.Services';
import { Customemailvalidators } from '../CustomEmailValidation';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/Register';

@Component({
  selector: 'app-create-cis-student',
  templateUrl: './create-cis-student.component.html',
  styleUrls: ['./create-cis-student.component.css']
})
export class CreateCisStudentComponent implements OnInit {

  constructor(private activehttp:Router, private formbuilder:FormBuilder,private Services:StudentSercies,private customemailvalidatior: Customemailvalidators) {
   
   }
  employeeform:FormGroup;
 StudentsLevel:object[]=[{Name:'First',Value:1},{Name:'Second',Value:2},{Name:'Third',Value:3},{Name:'Four',Value:4}];
  ngOnInit() {
   
    this.employeeform=this.formbuilder.group({password:['',Validators.required],StudentName:['',[Validators.required]],studentEmail:['',[Validators.required]],StudentImage:[''],StudentLevel:['']});
   
  }
  
 
Save(CisStudent:CisStudent){
this.Services.AddStudent(CisStudent);
window.localStorage.setItem("Name",CisStudent.StudentName);
window.localStorage.setItem("Email",CisStudent.studentEmail);
window.localStorage.setItem("Authorize","true");


var imageurl=CisStudent.StudentImage.split('\\');
window.localStorage.setItem("Image",imageurl[imageurl.length-1]);

var re=new Register();
re.password=CisStudent.password;
re.studentEmail=CisStudent.studentEmail;
this.Services.CanRegister(re).subscribe(a=>{
  if(a){
    console.log(a);
    location.href="/HomePage/"+a.id;
  }
});



}
selectedfile=null;

saveimage(files){
  let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
this.Services.addimagea(formData);

}
}
