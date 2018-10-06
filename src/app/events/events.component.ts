import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {Router, ParamMap} from '@angular/router';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public pageid;
  totalevents =[]
  constructor(private events:EventService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.events.getevents()
    .subscribe(
      res=> this.totalevents =res,
      err=>console.log(err)
    )
  }

  onSelect(event){
    this.router.navigate(['/viewmore',event._id]);
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pageid = id;
     // this.router.navigate([getpage.id],{relativeTo: this.route});
  }
}
