import { UserService } from 'src/app/data/services/user.service';
import { Message } from './../../core/domain/message';
import { Injectable } from '@angular/core';
import { ChatRepository } from 'src/app/core/repositories/chat-repository';
import * as signalR from '@microsoft/signalr';          // import signalR
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatService extends ChatRepository {
  GetMessages(sendSTDId: number, recieveSTDId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/Chat/GetMessages?fromSTD=${sendSTDId}&toSTD=${recieveSTDId}`;
    return this.http.get<Message[]>(url, this.options);
  }


  private  connection: any = new signalR.HubConnectionBuilder().withUrl("http://localhost:5000/chatHub")
                                         .build();
   readonly POST_URL = `${this.baseUrl}/Chat/SendRequest`;
  private sharedObj = new Subject<Message>();
  constructor(private http: HttpClient,private userService:UserService) {
    super();

    this.connection.onclose(async () => {
      console.log("Closed Connection");
      this.RemoveFromGroup();
      await this.start();
    });
   this.connection.on("ReciveMessage", (message:Message) => { this.mapReceivedMessage(message); });
   this.start();
  }


  // Strart the connection
  public  start() {
    this.connection
    .start()
    .then(() => {console.log('Connection started');this.JoinInGroup();})
    .catch(err => console.log('Error while starting connection: ' + err));
  }

  private mapReceivedMessage(message:Message): void {
    this.sharedObj.next(message);
  }
  public JoinInGroup(){
    this.connection.invoke("JoinToGroup", this.userService.getUser().name).catch(err => console.log("Canot join"));
  }
  public RemoveFromGroup(){
    this.connection.invoke("RemoveFromGroup", this.userService.getUser().name).catch(err => console.log("Canot Remove"));
  }
  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMessage(msgDto: Message):Observable<number> {
    return this.http.post<number>(this.POST_URL, msgDto,this.options);
  }

  IsActiveUser(){

  }
  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }
}
