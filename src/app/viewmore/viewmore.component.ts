import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {
  member=[]
  // public member_id;
  constructor(private auth:AuthService,private route:ActivatedRoute) { }

ngOnInit() {
  this.auth.getspecificuser()
  .subscribe(
     res=>{
      this.member = res,
      console.log(this.member)
     },
     err=> console.log(err)
     //{
    //   console.log(res)
    // }
  )
  

}}
