import { Component, OnInit, Input } from '@angular/core';
import { CisStudentProfile } from '../CisStudentProfile';

@Component({
  selector: 'app-cis-student-profile-component',
  templateUrl: './cis-student-profile-component.component.html',
  styleUrls: ['./cis-student-profile-component.component.css']
})
export class CisStudentProfileComponentComponent implements OnInit {
  @Input()
  CisStudentProfile: CisStudentProfile;
  constructor() { }

  ngOnInit() {
  }

}
