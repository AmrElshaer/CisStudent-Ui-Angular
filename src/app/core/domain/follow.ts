import { User } from 'src/app/core/domain/user';
export interface Follow {

    id: number ;
    createDate: Date;
    isAccepte: boolean ;
    cisStudentSendId: number ;
    cisStudentSend: User ;
    cisStudentRecieveId: number ;
    cisStudentRecieve: User ;
}
