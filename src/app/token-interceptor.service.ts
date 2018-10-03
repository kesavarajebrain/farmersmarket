//Injector used for importing auth service in this file
import { Injectable,Injector } from '@angular/core';

//import interceptor
import {HttpInterceptor} from '@angular/common/http';

//import auth service 
import {AuthService} from '../app/auth.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  //private injector:Injector is used for inject auth service 
  constructor(private injector:Injector) { }

  intercept(req,next){

    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{

        //hard coded authorization
       // Authorization: 'Bearer xx.yy.zz'

       //dynamic auth
       Authorization:`Bearer ${authService.getToken()}`

      }
    })
    return next.handle(tokenizedReq)
  }
}
