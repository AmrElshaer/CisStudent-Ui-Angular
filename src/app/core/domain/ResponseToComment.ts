import { User } from './user';
export interface ResponseToComment {
   id: number;
    content: string;
   createDate: number;
   commentId: number;
   comment: Comment;
   cisStudentId: number;
   cisStudent: User;
}