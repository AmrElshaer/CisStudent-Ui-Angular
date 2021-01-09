import { User } from 'src/app/core/domain/user';
export interface follow {

    id: number ;
    createDate: Date;
    IsAccepte: boolean ;
    cisStudentSendId: number ;
    cisStudentSend: User ;
    cisStudentRecieveId: number ;
    cisStudentRecieve: User ;
}
