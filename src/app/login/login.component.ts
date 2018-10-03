import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData={}
  errormsg;
 
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit() {
    // this.auth.getUser()
    // .subscribe(
    //   res=>{
    //     console.log(res)
    //   }
    // )
  }

  login(){
    console.log(this.loginUserData)
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res=>{
        //console.log(res)
        alert('Welcome');
        localStorage.setItem('token',res.token)
        this.route.navigate(['/special'])
      },
     // err=>console.log(err)
     err=>{
      if(err.statusText === 'Unauthorized'){
       // console.log('Ooops!');
     this.errormsg ='Check Email and Password !'

      }
     
     

     }
   
    )
    
  }
  
}
