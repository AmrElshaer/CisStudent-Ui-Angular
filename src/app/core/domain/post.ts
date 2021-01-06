import { User } from 'src/app/core/domain/user';
export interface Post {
   id: number;
   title: string;
   content: string;
    createDate: Date;
    cisStudentId: number;
    cisStudent: User;
}
