import { User } from './user';
export interface ResponseToResponse {
   id: number;
    content: string;
   createDate: number;
  cesponseToCommentId: number;
   responseToComment: Comment;
   cisStudentId: number;
   cisStudent: User;
}
