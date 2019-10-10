import { Component, OnInit } from '@angular/core';
import { StudentSercies } from 'src/app/Student.Services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CisStudent } from 'src/app/CisStudent';
import { CisStudentResponse } from 'src/app/CIsSTudentResponse';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  employeeform: FormGroup;
  CisstudentId: number;
  CisStudent:CisStudentResponse;
  StudentsLevel:object[]=[{Name:'First',Value:1},{Name:'Second',Value:2},{Name:'Third',Value:3},{Name:'Four',Value:4}];
  constructor(private _router:Router, private stdservices: StudentSercies, private formbuilder: FormBuilder, private router: ActivatedRoute) { 
  

    this.router.paramMap.subscribe(a => {
      this.CisstudentId = +a.get('Id');
      console.log(this.CisstudentId);
      this.stdservices.getstudentbyid(this.CisstudentId).subscribe(a => {
        console.log(a);
        this.CisStudent=a;
        if (this.CisStudent&&this.CisStudent!=undefined) {
         
         
          this.employeeform = this.formbuilder.group({password:[this.CisStudent.password,Validators.required],StudentName: [this.CisStudent.studentName, [Validators.required]], studentEmail: [this.CisStudent.studentEmail, [Validators.required]], StudentImage: [''], StudentLevel: [this.CisStudent.studentLevel] });

        }

      });





    });


  }

  ngOnInit() {
    
  }
  Save(data:CisStudent){
    console.log(data);
    var imageurl;
    this.CisStudent.studentEmail=data.studentEmail;
    this.CisStudent.password=data.password;
    if(data.StudentImage){
     
      this.CisStudent.studentImage=data.StudentImage;
     imageurl=data.StudentImage.split('\\');
    }
    else{
  imageurl=this.CisStudent.studentImage.split('\\');
    }
    
    this.CisStudent.studentLevel=data.StudentLevel;
    this.CisStudent.studentName=data.StudentName;
   
    this.stdservices.updateStudent(this.CisStudent);
    window.localStorage.setItem("Name",data.StudentName);
    window.localStorage.setItem("Email",data.studentEmail);
    
    console.log(imageurl[imageurl.length-1]);
    window.localStorage.setItem("Image",imageurl[imageurl.length-1]);

    
    this._router.navigate(['HomePage',this.CisStudent.id]);
    location.reload();
    }
    saveimage(files){
      let fileToUpload = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.stdservices.addimagea(formData);
    }
}
