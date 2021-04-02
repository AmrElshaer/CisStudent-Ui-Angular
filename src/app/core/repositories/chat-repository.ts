import { Message } from './../domain/message';
import { Observable } from 'rxjs';
import { BaseRepository } from './base-repository';
export abstract class  ChatRepository extends BaseRepository {
  abstract GetMessages(sendSTDId:number,recieveSTDId:number):Observable<Message[]>;
}
