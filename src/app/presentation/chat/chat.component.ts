import { Follow } from 'src/app/core/domain/follow';
import { FollowService } from './../../data/services/follow.service';
import { Profile } from 'src/app/core/domain/profile';
import { ProfileService } from 'src/app/data/services/profile.service';
import { UserService } from 'src/app/data/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from './../../core/domain/message';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit} from '@angular/core';
import { ChatService } from 'src/app/data/services/chat.service';
import { User } from 'src/app/core/domain/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  msgInboxArray: Message[] = [];
  chatGroup: FormGroup;
  // tslint:disable-next-line: typedef-whitespace
  chatWith: Profile;
  SendUserId: number;
  followers: Follow[];
  ShowLoader: boolean = true;
  @ViewChild('chatInbox', null)
  scrollChatInbox: ElementRef;
  constructor(private chatService: ChatService, private formBuilder: FormBuilder,
              private userService: UserService, private profileSerive: ProfileService
              , private router: ActivatedRoute, private followService: FollowService) {

    }


  ngOnInit(): void {
    this.InitBlog();
    this.SendUserId = +this.userService.getUser().id;
    this.router.paramMap.subscribe(rot => {

       const chatWithId = +rot.get('chatWith');
       // get messages between two user
       this.chatService.GetMessages(chatWithId, this.SendUserId)
       .subscribe(a => {
         this.ShowLoader = false;
         if (a){
           this.msgInboxArray = [];
         }
         a.forEach(m => this.addToInbox(m));
         this.scrollToBottom();
        },err=>this.ShowLoader = false);
       this.profileSerive.GetProfile(chatWithId)
       .subscribe(p => this.chatWith = p);
    });

    this.chatService.retrieveMappedObject().subscribe( (receivedObj) => {
      if(receivedObj.sendId==this.chatWith.cisStudentId){
            this.addToInbox(receivedObj);
      }

     });

     // Followers
    this.followService.GetFollows(+this.userService.getUser().id).subscribe(allfollowers => this.followers = allfollowers);
    }

   private InitBlog() {
    this.chatGroup = this.formBuilder.group({
      content: ['', Validators.required],

    });
  }
  scrollToBottom(): void {
        this.scrollChatInbox.nativeElement.scrollTop = this.scrollChatInbox.nativeElement.scrollHeight;
   }
  send(message: Message) {
        this.scrollToBottom();
        message.sendId = this.SendUserId;
        message.recieveId = this.chatWith.cisStudentId;
        this.chatService.broadcastMessage(message).subscribe(a => {
          this.chatGroup.reset({content: ''});
          message.sendSTD = this.userService.getUser();
          message.createDate = new Date();
          this.addToInbox(message);
        }

        );

  }
  SeeFollower(){
    this.ShowLoader = true;
  }
  addToInbox(obj: Message) {
    this.msgInboxArray.push(obj);
  }

}
