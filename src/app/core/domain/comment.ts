import { User } from './user';
import { Post } from './post';
export interface Comment {
  id: number;
  content: string;
  createDate: Date;
  postId: number;
  post: Post;
  cisStudentId: number;
 cisStudent: User;
}
