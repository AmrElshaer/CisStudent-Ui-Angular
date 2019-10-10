import { Component, OnInit, Input } from '@angular/core';
import { CisStudentResponse } from '../CIsSTudentResponse';
import { StudentSercies } from '../Student.Services';
import { respnsetoresponse } from '../responsetoresponse';
import { Responsetoresponseservieces } from '../responsetoresponseservices';

@Component({
  selector: 'app-responsetoresponse',
  templateUrl: './responsetoresponse.component.html',
  styleUrls: ['./responsetoresponse.component.css']
})
export class ResponsetoresponseComponent implements OnInit {

  @Input()
  responsetoresponseloop: ResponsetoresponseComponent;
  allcisstudent: CisStudentResponse[];
  allresponsetoresponse: respnsetoresponse[];
  responsetoresponsetoshow: string;
  @Input()
  Id: string;
  responsetoresponsehref: string;
  constructor(private Cisstudentservces: StudentSercies, private responsetoresponseservices: Responsetoresponseservieces) {

  }

  ngOnInit() {
    this.responsetoresponsehref = "http://localhost:57761/ResponsetoResonse/Create?idofstudent=" + this.Id + "&idofresponse=";
    this.Cisstudentservces.AllCisSTudent().subscribe(a => {
      this.allcisstudent = a;
    });
  }
  allresponsetoresponsefun(id) {
    this.responsetoresponsetoshow = null;
    this.responsetoresponseservices.getstudentPosts(id).subscribe(a => {
      console.log(id);
      this.responsetoresponsetoshow = id;
      this.allresponsetoresponse = a;
    });
  }
}
