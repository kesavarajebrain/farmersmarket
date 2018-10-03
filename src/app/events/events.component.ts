import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 
  totalevents =[]
  constructor(private events:EventService) { }

  ngOnInit() {
    this.events.getevents()
    .subscribe(
      res=> this.totalevents =res,
      err=>console.log(err)
    )
  }

}
