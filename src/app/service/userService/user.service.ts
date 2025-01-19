import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL= 'http://localhost:3000/'

  constructor(private http : HttpClient) {}

  getAllUsers(){
    return this.http.get(this.API_URL+'allUsers')
  }

  getUserById(id:string){
    return this.http.get(this.API_URL+'getUser/'+id)
  }

  updateUser(id:string,data:any){
    return this.http.patch(this.API_URL+'updateUser/'+id,data)
  }

  deleteUser(id:string){
    return this.http.delete(this.API_URL+'deleteUser/'+id)
  }
}
