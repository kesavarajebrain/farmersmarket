import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service'

// import for navigate login 
import {Router} from '@angular/router';
 
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  totalsplevents=[]
  constructor(private events:EventService, private route:Router) { }

  ngOnInit() {
    this.events.getspecial()
    .subscribe(
      res=>this.totalsplevents=res,

      //before authentication
     // err=>console.log(err)

     //after auth 
     err =>{
       if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.route.navigate(['/login'])
        }
       }
     }
    )
  }

}
