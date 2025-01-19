import { Component } from '@angular/core';
import { BlogModel } from '../../interface/BlogModel';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approved-blog',
  templateUrl: './approved-blog.component.html',
  styleUrl: './approved-blog.component.css'
})
export class ApprovedBlogComponent {

  approvedBlogs: BlogModel[] = [];
  constructor(private service: BlogActionService) { }
  ngOnInit() {
    this.service.getApprovedBlogs().subscribe((data) => {
      this.approvedBlogs = data;
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
