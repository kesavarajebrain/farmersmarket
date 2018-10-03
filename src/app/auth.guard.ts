import { Injectable } from '@angular/core';
//on default 
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//modified
import { CanActivate,Router } from '@angular/router';

//not need
//import { Observable } from 'rxjs';

//import auth service
import {AuthService} from '../app/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(private auth:AuthService,private route:Router){}

  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true

    }else{
      this.route.navigate(['/login'])
    }
  }
}
