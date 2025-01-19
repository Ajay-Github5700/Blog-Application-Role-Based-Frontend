import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel, BlogResponse } from '../../interface/BlogModel';

@Injectable({
  providedIn: 'root'
})
export class BlogActionService {
  API_URL='http://localhost:3000/'
  constructor(private http : HttpClient) {}

  //Get Pending Blogs
  getPendingBlogs(){
    return this.http.get<BlogModel[]>(this.API_URL+'pendingblogs',{
      withCredentials:true
    })
  }

  // Add new Blog
  addBlog(data:any){
    return this.http.post(this.API_URL+'addblog',data,{
      withCredentials:true
    })
  }

  //Get all Approved Blogs
  getApprovedBlogs(){
    return this.http.get<BlogModel[]>(this.API_URL+'approvedblogs',{
      withCredentials:true
    })
  }
  
  //Get All Blogs For Admin
  getSomeBlogs(page:number){
    return this.http.get<BlogResponse>(`${this.API_URL}?page=${page}`,{withCredentials:true})
  }

  
  //Get Blogs By Category
  getSearchBlogs(data:any){
    return this.http.post<BlogModel[]>(this.API_URL+'searchblogs',data,{
      withCredentials:true
    })
  }
  
  //Get Blogs Uploaded By Perticular User
  BlogsByUser(){
    return this.http.get<BlogModel[]>(this.API_URL+'search-by-user',{
      withCredentials:true
    })
  }
  
  //Get Blog By Id for Detailed Blog
  getBlogById(id:string){
    return this.http.get<BlogModel>(this.API_URL+'getblog/'+id,{
      withCredentials:true
    })
  }

  //Update Blog Status
  approveBlog(id:string,data:any){
    return this.http.put(this.API_URL+'updateblog/'+id,data,{
      withCredentials:true
    })
  }

//Delete Blog From User Access
  removeBlog(_id:String){
    return this.http.delete(this.API_URL+'delete/'+_id,{
      withCredentials:true
    })
  }
  
}

/*   // Get All Blogs for Search 
getAllBlogs(){
    return this.http.get<BlogModel[]>(this.API_URL+'allblogs',{
      withCredentials:true
    })
  } */
  /*  
  
  // Get Sorted Blogs
    getSortedBlogs(data:any){
      return this.http.post<BlogModel[]>(this.API_URL+'sortedblogs',data,{
        withCredentials:true
      })
    } */