import { User } from 'src/app/core/domain/user';
export interface Message {
         id: number ;
         sendId: number ;
         sendSTD: User ;
         recieveId: number ;
         recieveSTD: User ;
         createDate: Date ;
         isSee: boolean ;
         content: string ;
}
