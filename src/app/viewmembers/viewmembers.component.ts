import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router, ParamMap} from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.css']
})
export class ViewmembersComponent implements OnInit {
  public memberid;
  memberslist=[]

  constructor(private auth:AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.auth.getUser()
    .subscribe(
       res=>this.memberslist = res,
       err=> console.log(err)
      
    )

       //using paramMAP
       this.route.paramMap.subscribe((params:ParamMap) =>{
        let id = parseInt(params.get('id'));
        this.memberid = id;
      });
  }
  onSelect(member){
    this.router.navigate(['/viewmore',member._id]);
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.memberid = id;
     //this.router.navigate([''],{relativeTo: this.route});
  }

 deleteuser(member){
  this.router.navigate(['/viewmembers',member._id]);
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.memberid = id;
  this.auth.deleteuser()
  .subscribe(
     res=> console.log(res),
     err=> console.log(err)
  
  )
 }

}
