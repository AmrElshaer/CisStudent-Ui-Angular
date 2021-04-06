import { Observable, Subscription } from 'rxjs';
import { UserService } from './../../data/services/user.service';
import { Message } from './../../core/domain/message';
import { ChatService } from 'src/app/data/services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
@Component({
  selector: 'app-message-notification',
  template: '',
  styleUrls: ['./message-notification.component.css']
})
export class MessageNotificationComponent implements OnInit,OnDestroy {
  $message:Subscription;
  constructor(private chatService:ChatService,private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    console.log('notification init');
    this.chatService.JoinInGroup();
    this.chatService.GetMissMessages(+this.userService.getUser().id).subscribe(a=>a.forEach(m=>this.showNotification('bottom','right',m)));
     this.$message= this.chatService.retrieveMappedObject().subscribe(m=>{ this.showNotification('bottom','right',m)});
  }

  ngOnDestroy(): void {
    this.$message.unsubscribe();
    this.chatService.RemoveFromGroup();
  }
  showNotification(from, align,message:Message) {
        this.playAudio();
        const sendDate=moment(message.createDate).fromNow();
        this.toastrService.show(
        `<span  class="far fa-2x fa-envelope " data-notify="icon"></span><span data-notify="message"> <b>${message.sendSTD.name}</b>  ${message.content}  ${sendDate}  <b><a href="/Messages/${message.sendId}">See</a></b>.</span>`,
          "",
          {
            timeOut:5000,
            closeButton: false,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );

  }
  playAudio(){
    let audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
    audio.play();
  }
}
