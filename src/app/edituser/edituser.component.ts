import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {RouterModule} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  memberlist=[]
  id:any;
  registerUserData={
    userName:String,
    phoneNumber:Number,
    password:String
  }
  // registerUserData={}
  constructor(private auth:AuthService,private route:ActivatedRoute,private router:RouterModule) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id']
    this.auth.getUser()
   
    .subscribe(
       res=>{
         this.memberlist = res
         console.log(this.id)
       
         for(let i=0; i < this.memberlist.length; i++){
           console.log( this.memberlist)
           if(this.id == this.memberlist[i]._id){
    this.registerUserData.userName = this.memberlist[i].userName
    this.registerUserData.phoneNumber = this.memberlist[i].phoneNumber
    this.registerUserData.password = this.memberlist[i].password
           }
         }
       },
       err=> console.log(err)
      
    )
  }

  update(){
    console.log(this.registerUserData)
    this.auth.getspecificuser(this.registerUserData,this.id)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err),

    )
  }

}
