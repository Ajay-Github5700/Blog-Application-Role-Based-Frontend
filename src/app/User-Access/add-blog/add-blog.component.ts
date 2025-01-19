import { Component } from '@angular/core';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {

  blogData: any = []

  blogForm!:FormGroup
  constructor(private service: BlogActionService, private route: ActivatedRoute) {
    this.blogForm = new FormGroup({
      author: new FormControl('', [Validators.required, Validators.minLength(2)]),
      title: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      image: new FormControl(null, [Validators.required])
    })
    this.blogData=this.blogForm.value
    
   }
   

   onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogForm.patchValue({ image: file });
    }
  }


  onSave() {
    const blogData = new FormData();
    blogData.append('author', this.blogForm.get('author')?.value);
    blogData.append('title', this.blogForm.get('title')?.value);
    blogData.append('description', this.blogForm.get('description')?.value);
    blogData.append('image', this.blogForm.get('image')?.value); // Attach file

    this.service.addBlog(blogData).subscribe((data) => {
      alert(`Blog Successfully Added to Admin Panel`)
      this.blogForm.reset()
    }, (err) => {
      alert('Blog Submission Failed')
      console.error(err)
    })
  }

 
}
