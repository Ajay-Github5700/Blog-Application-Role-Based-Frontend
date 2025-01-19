import { Component, OnInit } from '@angular/core';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.css'
})
export class AllBlogsComponent implements OnInit {
  blogs: any = []
  searchForm!: FormGroup
  currentPage = 1
  totalPages = 0
  constructor(private service: BlogActionService, private router: Router) {

    this.searchForm = new FormGroup({
      category: new FormControl('title'),
      query: new FormControl(),
      sortby: new FormControl(null),
    })
  }
  ngOnInit(): void {
    this.loadBlogs(this.currentPage);
  }

  loadBlogs(page: number) {
    this.service.getSomeBlogs(page).subscribe((data => {
      this.blogs = data.blogs
      this.totalPages = data.totalPages

    }), (err) => {
      console.warn('Error');
      if (err.status === 401) {
        alert('Token Expired')
        this.router.navigate(['/login'])
      }
    })
  }

  onNext() {
    if (this.currentPage < this.totalPages) {
      {
        ++this.currentPage
        this.loadBlogs(this.currentPage)
      }
    }
  }

  onPrevious() {
    if (this.currentPage > 1) {
      --this.currentPage
      this.loadBlogs(this.currentPage)
    }
  }


  // Search Functionality 
  onSerachBlogs() {
    this.service.getSearchBlogs(this.searchForm.value).subscribe((data => {
      if (data.length == 0) {
        alert('No Blogs Found')
      } else {
        this.blogs = data
      }
    }), (err) => {
      console.log(err)
      alert('Something Went Wrong')
    })
  }


  onSearchChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (!value) {
      this.currentPage = 1
      this.service.getSomeBlogs(this.currentPage).subscribe((data => {
        this.blogs = data.blogs
      }))

    }
  }
  onSortChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (value != 'null') {
      this.service.getSearchBlogs(this.searchForm.value).subscribe((data => {
        this.blogs = data
      }))
    }else{
      this.currentPage = 1
      this.service.getSomeBlogs(this.currentPage).subscribe((data => {
        this.blogs = data.blogs
        this.totalPages = data.totalPages
      })) 
    }
  }
}