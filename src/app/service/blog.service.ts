import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  API_Url= 'http://localhost:3000/'
  constructor(private http : HttpClient) {}

  //Register User
  RegisterUser(data:any){
    return this.http.post(this.API_Url+'register',data)
  }

  //Login User
  CheckUser(data:any){
    
    return this.http.post(this.API_Url+'login',data,{
      withCredentials:true
    })
  }

  //Get All Users
  allUsers(){
    return this.http.get(this.API_Url+'allusers',{
      withCredentials:true
    })
  }

}
