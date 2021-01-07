import { User } from 'src/app/core/domain/user';
export interface Training {
    id: number ;
    technology: string ;
    place: string ;
    createDate: Date ;
    content: string;
    cisStudentId: number;
   cisStudent: User ;
}
