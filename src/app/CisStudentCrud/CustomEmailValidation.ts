import { AbstractControl } from '@angular/forms';
import { OnInit, Inject } from '@angular/core';

import { StudentSercies } from '../Student.Services';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { CisStudent } from '../CisStudent';
@Injectable()
export class Customemailvalidators implements OnInit {

    cisstudent: CisStudent[];


    constructor(private stdservic: StudentSercies) {
     
    }

    ngOnInit(): void {


    }
    checkEmail(control: AbstractControl): { [Email: string]: any } | null {
        if (this.cisstudent!=null&&this.cisstudent!=undefined) {
            var cisstudentindex = this.cisstudent.findIndex(a => a.studentEmail = control.value);
            if (cisstudentindex != -1) {
                return { "EmailNot": true };
            }
        }
        return null;
    }
}