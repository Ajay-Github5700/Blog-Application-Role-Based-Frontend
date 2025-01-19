import { Component } from '@angular/core';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export class MyBlogsComponent {
  myBlogs: any = []
  constructor(private service: BlogActionService) { }
  
  ngOnInit(): void {
    this.service.BlogsByUser().subscribe((data) => {
      this.myBlogs = data
    },(error)=>{
      alert
      console.log(error)
    })
  }

  rejectBlog(id: string) {
    const ok = confirm('Are You Sure Want To Delete This Blog...?')
    if (ok) {
      this.service.removeBlog(id).subscribe((data) => {
        let result = data
        alert('Blog Deleted Successfully')
        location.reload()
      })
    }
  }
}
