import { ChatComponent } from './chat.component';
import { AdminLayoutComponent } from '../Layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{path:'',component:AdminLayoutComponent,children:[
{path: 'Messages/:chatWith', component: ChatComponent}
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
