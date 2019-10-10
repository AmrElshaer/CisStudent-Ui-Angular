import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CisStudentProfile } from '../CisStudentProfile';
import { StudentProfileSercies } from '../CisStudentProfileServices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employeeform:FormGroup;
  constructor( private activehttp:ActivatedRoute,private _router:Router, private formbuilder:FormBuilder,private Services:StudentProfileSercies) {
  
  }
 

 ngOnInit() {
 
   this.employeeform=this.formbuilder.group({country:['',Validators.required],colleage:['',[Validators.required]],university:['',[Validators.required]],age:[''],experience:[''],language:[''],program_Language:[''],carear:[''],appreciation:[''],company_youWork:[''],addition:[''],studentId:[''],kind:['']});
   console.log(location.pathname);
   if(location.pathname.split('/')[1]=="Updateprofile"){
    this.activehttp.paramMap.subscribe(a=>{
      this.Services.getstudentbyid(a.get("Id")).subscribe(a=>{
        
     this.employeeform.controls['age'].setValue(a.age);
     this.employeeform.controls['colleage'].setValue(a.colleage);
     this.employeeform.controls['university'].setValue(a.university);
     this.employeeform.controls['carear'].setValue(a.carear);
     this.employeeform.controls['addition'].setValue(a.addition);
     this.employeeform.controls['kind'].setValue(a.kind);
     this.employeeform.controls['experience'].setValue(a.experience);
     this.employeeform.controls['appreciation'].setValue(a.appreciation);
     this.employeeform.controls['company_youWork'].setValue(a.company_youWork);
     this.employeeform.controls['language'].setValue(a.language);
     console.log(a.program_Language);
     this.employeeform.controls['program_Language'].setValue(a.program_Language);
     this.employeeform.controls['country'].setValue(a.country);
     
     
     
     
     
      });
       });
   }
  
 }
 

Save(CisStudent:CisStudentProfile){
  if(location.pathname.split('/')[1]=="Updateprofile"){
    this.activehttp.paramMap.subscribe(a=>{ 
      CisStudent.studentId=a.get('Id');
      this.Services.AllCisSTudent().subscribe(
        b=>{
      var profile=b.find(x=>x.studentId==a.get('Id'));
       console.log(profile);
       CisStudent.id=profile.id;
          this.Services.updateStudent(profile.id,CisStudent);
          this._router.navigate(['/HomePage/'+a.get('Id')]);
        }
      );
     
  
  });
   
  }
  else{
    this.activehttp.paramMap.subscribe(a=>{
      CisStudent.studentId=a.get('Id');
  
      this.Services.AddStudent(CisStudent);
      this._router.navigate(['/HomePage/'+a.get('Id')]);
     
      });
  }
 

}




}
