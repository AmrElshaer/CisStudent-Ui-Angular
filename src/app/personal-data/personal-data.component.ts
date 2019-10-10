import { Component, OnInit, Input } from '@angular/core';
import { CisStudent } from '../CisStudent';
import { StudentSercies } from '../Student.Services';
import { CisStudentResponse } from '../CIsSTudentResponse';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
@Input()
Id:string;
ImageHref:string;
@Input()
currentstudent:string;
Cisstudent:CisStudentResponse;
  constructor(private personalservices:StudentSercies) { }

  ngOnInit() {
    console.log("ID of"+this.Id);
    this.ImageHref="http://localhost:57761/upload/";
if(this.Id){
this.personalservices.getstudentbyid(this.Id).subscribe(a=>{
this.Cisstudent=a;
});
}
  }

}
