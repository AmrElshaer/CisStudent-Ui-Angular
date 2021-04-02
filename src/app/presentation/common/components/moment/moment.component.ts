import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-moment',
  template: `
   {{dateFromNow}}
  `,
  styles: [
  ]
})
export class MomentComponent implements OnInit {
  @Input() FromNoDatetime:Date;
  dateFromNow:string;
  constructor() { }

  ngOnInit(): void {
    setInterval(() =>this.dateFromNow=this.timeFromNow(), 1000);
  }
  timeFromNow(): string {
    return moment(this.FromNoDatetime).fromNow()
  }
}
