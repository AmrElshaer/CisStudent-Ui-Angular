import { Component, OnInit, Input } from '@angular/core';
import { CisStudent } from '../CisStudent';
import { StudentSercies } from '../Student.Services';
import { CisStudentResponse } from '../CIsSTudentResponse';

@Component({
  selector: 'app-personal-data-fro-all-frient',
  templateUrl: './personal-data-fro-all-frient.component.html',
  styleUrls: ['./personal-data-fro-all-frient.component.css']
})
export class PersonalDataFroAllFrientComponent implements OnInit {
  @Input()
  Id: string;
  ImageHref: string;
  @Input()
  currentstudent: string;
  Cisstudent: CisStudentResponse;
  constructor(private personalservices: StudentSercies) { }

  ngOnInit() {
    console.log("ID of" + this.Id);
    this.ImageHref = "http://localhost:57761/upload/";
    if (this.Id) {
      this.personalservices.getstudentbyid(this.Id).subscribe(a => {
        this.Cisstudent = a;
      });
    }
  }

}


