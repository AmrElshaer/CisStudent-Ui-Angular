import { PostDetailsComponent } from './post-details/post-details.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{path: 'Blog/Create', component: CreatePostComponent},
{path: 'Blog/All', component: AllPostsComponent},
{path: 'Blog/Edit/:id', component: CreatePostComponent},
{path: 'Blog/Delete/:id', component: PostDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
