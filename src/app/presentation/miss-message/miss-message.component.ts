
import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/data/services/chat.service';

@Component({
  selector: 'app-miss-message',
  templateUrl: './miss-message.component.html',
  styles: [
  ]
})
export class MissMessageComponent implements OnInit {

  @Input()UserId: number;
  missMessage: string;
  sendDate: Date;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe(a=>{
      if(a.sendId==this.UserId){
         this.missMessage=a.content;
         this.sendDate=a.createDate;
      }
    })
  }

}
