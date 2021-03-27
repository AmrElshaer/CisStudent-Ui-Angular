import { Reactions } from './../../../core/domain/reaction';
import { User } from './../../../core/domain/user';
import { UserService } from './../../../data/services/user.service';
import { ReactionService } from './../../../data/services/reaction.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as _ from "lodash";
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit,OnDestroy {

  @Input() postId: number;

  showEmojis = false;
  emojiList: string[];

  reactionCount: Reactions[]=[];
  userReaction: Reactions[]=[];

  subscription: any;
  user:User;
  constructor(private reactionSvc: ReactionService,private userService:UserService) { }
  ngOnInit() {
    this.user= this.userService.getUser();
    this.emojiList = this.reactionSvc.emojiList;
    this.subscription = this.reactionSvc.GetReactions(this.postId)
                         .subscribe(reactions => {
                          this.reactionCount =reactions;
                           this.userReaction  = this.reactionSvc.userReaction(reactions,+this.user.id)

    })
  }
  react(val) {
    if (this.userReaction.length>0&&this.userReaction[0].reactionIndex === val) {
      this.DeleteReaction();
    } else {
      this.reactionSvc.UpSrtReaction(+this.user.id,this.postId, val).subscribe(a=>{
        if(this.userReaction.length==0){
          this.AddReaction(a, val);
        }else{
            this.UpdateReaction(a, val);
        }
      });
    }
  }

  private UpdateReaction(a: number, val: any) {
    this.userReaction[0] = {
      id: a, studentId: +this.user.id, postId: this.postId, reactionIndex: val
    };
    let rect = this.reactionCount.filter(a => a.postId == this.postId && a.studentId == +this.user.id)[0];
    rect.reactionIndex = val;
  }

  private AddReaction(a: number, val: any) {
    let rec = { id: a, studentId: +this.user.id, postId: this.postId, reactionIndex: val };
    this.userReaction.push(rec);
    this.reactionCount.push(rec);
  }

  private DeleteReaction() {
    this.reactionSvc.DeleteReaction(+this.user.id, this.postId).subscribe(() => {
      this.userReaction = [];
      this.reactionCount = this.reactionCount.filter(a => a.postId != this.postId && a.studentId != +this.user.id);
    }, err => console.log("error when remove react"));
  }

  toggleShow() {
    this.showEmojis = !this.showEmojis
  }


  emojiPath(emoji) {
   return `assets/reactions/${emoji}.svg`
  }

  hasReactions(index) {
    var reacts=  this.reactionCount.filter(a=>a.reactionIndex==index);
    if (reacts.length>0){
      return true;
    }
    return false;
  }
  GetReactsCount(emoji){
    var reacts=  this.reactionCount.filter(a=>a.reactionIndex==emoji);
    return reacts.length;

  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
