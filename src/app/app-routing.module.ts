import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ViewmembersComponent} from '../app/viewmembers/viewmembers.component';
import {ViewmoreComponent} from '../app/viewmore/viewmore.component'
import {AuthGuard} from '../app/auth.guard'
const routes:Routes =[
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'special',
    component:SpecialComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'viewmembers',
    component:ViewmembersComponent,
    canActivate:[AuthGuard]
  },
  {path:'viewmore/:id',
  component:ViewmoreComponent},
  

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
