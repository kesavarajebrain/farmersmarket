import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from '../app/auth.service';
import {EventService} from '../app/event.service'
import {AuthGuard} from '../app/auth.guard'

import {TokenInterceptorService } from '../app/token-interceptor.service';
import { ViewmembersComponent } from './viewmembers/viewmembers.component';
import { ViewmoreComponent } from './viewmore/viewmore.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,
    ViewmembersComponent,
    ViewmoreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [AuthService,EventService,AuthGuard,
  {
    //for using interceptor providers likes below
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
