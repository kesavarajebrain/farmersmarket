import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData={}
  errormsg;
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit() {
  }

  register(){
    console.log(this.registerUserData)
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        console.log(res)
        alert('Successfully Registered');
        localStorage.setItem('token',res.token)
        this.route.navigate(['/special'])
      },
    //  err=>console.log(err)

    err=>this.errormsg = err.statusText
    )
  }
}
