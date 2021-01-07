import { User } from './user';
export interface  Job {
    id: number;
    technology: string;
    place: string;
   createDate: Date;
    content: string;
    contactUs: string;
    cisStudentId: number;
    cisStudent: User;
}
