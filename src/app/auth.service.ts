import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import router for logout
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3200/api/register"
  private _usersUrl = "http://localhost:3200/api/users"
  private _loginUrl ="http://localhost:3200/api/login"
  private _getspecificuserUrl ="http://localhost:3200/api/users"
 // private _deletespecificuserUrl ="http://localhost:3200/api/users/:id"
  constructor(private http:HttpClient, private route:Router) { }

  registerUser(data){
    return this.http.post<any>(this._registerUrl,data)
  }

  getUser(){
    return this.http.get<any>(this._usersUrl)
  }

  loginUser(data1){
    return this.http.post<any>(this._loginUrl,data1)
  }

  getspecificuser(data,id){
    return this.http.put<any>(this._getspecificuserUrl + "/" + id ,data)
  }

  deleteuser(id){
    return this.http.delete<any>(this._getspecificuserUrl + "/" + id )
  }

  //auth guard
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  //get token from interceptor
  getToken(){
    return localStorage.getItem('token')
  }

  //logout
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/events'])
  }
}
