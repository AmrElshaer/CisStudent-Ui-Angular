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
  GetMissMessages(userId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/Chat/GetMissMessages?userId=${userId}`;
    return this.http.get<Message[]>(url, this.options);
  }
  constructor(private http: HttpClient, private userService: UserService) {
    super();

    this.connection.onclose(async () => {
      this.RemoveFromGroup();
      await this.start();
    });
    this.connection.on('ReciveMessage', (message: Message) => { this.mapReceivedMessage(message); });
    this.start();
  }


  private  connection: any = new signalR.HubConnectionBuilder().withUrl(`${this.baseUrl.replace('api' , 'chatHub')}`)
                                         .build();
   readonly POST_URL = `${this.baseUrl}/Chat/SendRequest`;
  private sharedObj = new Subject<Message>();
  GetMessages(sendSTDId: number, recieveSTDId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/Chat/GetMessages?fromSTD=${sendSTDId}&toSTD=${recieveSTDId}`;
    return this.http.get<Message[]>(url, this.options);
  }


  // Strart the connection
  public  start() {
    this.connection
    .start()
    .then(() => {this.JoinInGroup(); })
    .catch(err => console.log('Error while starting connection: ' + err));
  }

  private mapReceivedMessage(message: Message): void {
    this.sharedObj.next(message);
  }
  public JoinInGroup() {
    this.connection.invoke('JoinToGroup', this.userService.getUser().name).catch(err => console.log('Canot join'));
  }
  public RemoveFromGroup() {
    if(this.userService.getUser()){
      this.connection.invoke('RemoveFromGroup', this.userService.getUser().name).catch(err => console.log('Canot Remove'));
    }

  }
  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMessage(msgDto: Message): Observable<number> {
    return this.http.post<number>(this.POST_URL, msgDto, this.options);
  }

  IsActiveUser() {

  }
  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }
}
