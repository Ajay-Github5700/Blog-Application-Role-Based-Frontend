import { Component } from '@angular/core';
import { BlogActionService } from '../../../service/BlogAction/blog-action.service';

@Component({
  selector: 'app-pending-blogs',
  templateUrl: './pending-blogs.component.html',
  styleUrl: './pending-blogs.component.css'
})
export class PendingBlogsComponent {
  payload:any={}
  pendingBlogData:any=[]
  constructor(private blog_service:BlogActionService){
    this.blog_service.getPendingBlogs().subscribe((data)=>{
      this.pendingBlogData=data})

  }

  approveBlog(id:string,data:any){
    this.payload={"approved":!data}
    this.blog_service.approveBlog(id,this.payload).subscribe((data)=>{
      console.warn(data)
      alert('Blog Approved')
      location.reload()
    })
  }

  rejectBlog(id:string,data:any){
    console.log(data)
    this.payload={"rejected":!data}
      const ok=confirm('Are You Sure Want To Reject This Blog...?')
      if(ok){
        this.blog_service.approveBlog(id,this.payload).subscribe((data)=>{
          let result=data
          alert('Blog Rejected Successfully')
          location.reload()
        })
      }
  }
}
