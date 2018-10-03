import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsurl ="http://localhost:3200/api/events";
  private specialurl ="http://localhost:3200/api/special"
  constructor(private http:HttpClient) { }

  getevents(){
    return this.http.get<any>(this.eventsurl)
  }

  getspecial(){
    return this.http.get<any>(this.specialurl)
  }
}
