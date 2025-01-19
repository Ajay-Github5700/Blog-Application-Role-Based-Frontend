import { Component } from '@angular/core';
import { BlogActionService } from '../../service/BlogAction/blog-action.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ApprovedBlogs:any=[]
  constructor(private service : BlogActionService, private route : Router) { 
    this.service.getApprovedBlogs().subscribe((data=>{
      this.ApprovedBlogs=data
    }),(error)=>{
      if(error.status==401){
        alert('Session Expired Please Login Again')
        this.route.navigate(['/login'])
      }
    })
  }

}
