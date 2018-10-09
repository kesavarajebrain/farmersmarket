import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Params} from '@angular/router'
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {
 
  memberlist=[]
  id:any;
  member={
 name:'',
 phone:''
  }

  // public member_id;
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
 this.member.name = this.memberlist[i].userName
 this.member.phone = this.memberlist[i].phoneNumber

        }
      }
    },
    err=> console.log(err)
   
 )

}


// ngOnInit() {
 
//   this.id = this.route.snapshot.params['id']
// this.auth.getUser()
// .subscribe(
//   res=>{
//     this.memberlist = res
//     console.log(this.memberlist)
//     for(let i=0; i < this.memberlist.length; i++){
//       console.log(this.memberlist.length)
//       this.member.name = this.memberlist[0].userName
//     }
//   },
//   err=>{
//     console.log(err)
//   }
// )

// }

}

// ngOnInit() {
 
//   this.id = this.route.snapshot.params['id']
//  this.auth.getUser()

//  .subscribe(
//     res=>{
//       this.memberlist = res
//       console.log(this.id)
    
//       for(let i=0; i < this.memberlist.length; i++){
//         console.log( this.memberlist)
//         if(this.id = this.memberlist[0]._id){
//  this.member.name = this.memberlist[0].userName
//  this.member.phone = this.memberlist[1].phoneNumber

//         }
//       }

//     },
//     err=> console.log(err)
   
//  )

// }


