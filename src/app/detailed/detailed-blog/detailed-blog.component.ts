import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';

@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrl: './detailed-blog.component.css'
})
export class DetailedBlogComponent {

blog:any = []
constructor(private activedRoute: ActivatedRoute, private service : BlogActionService){
  this.activedRoute.params.subscribe(params=>{
    this.service.getBlogById(params['_id']).subscribe(data=>{
      this.blog=data
    })
  })
}
ngOnInit(){

}

}
