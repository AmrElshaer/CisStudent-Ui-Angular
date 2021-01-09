import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/domain/post';
import { PostRepository } from 'src/app/core/repositories/post-repository';

@Injectable({
  providedIn: 'root'
})
export class PostService extends PostRepository {



  constructor(private http: HttpClient) {
    super();

  }
  GetStudentsPosts(): Observable<Post[]> {
    const url = `${this.baseUrl}/Post/GetStudentsPosts`;
    return this.http.get<Post[]>(url);
  }
  GetPosts(studentId: number): Observable<Post[]> {
    const url = `${this.baseUrl}/Post/GetAllPost?studentId=${studentId}`;
    return this.http.get<Post[]>(url, this.options);
  }
  UpSrtPost(post: Post): Observable<number> {
    const url = `${this.baseUrl}/Post/UpSrtPost`;
    return this.http.post<number>(url, post, this.options);
  }
  GetPost(postId: number): Observable<Post> {
    const url = `${this.baseUrl}/Post/GetPost?id=${postId}`;
    return this.http.get<Post>(url, this.options);
  }
  DeletePost(postId: number): Observable<void> {
    const url = `${this.baseUrl}/Post/DeletePost?id=${postId}`;
    return this.http.delete<void>(url, this.options);
  }
}
