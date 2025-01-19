import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({})
  constructor(private service: BlogService, private route: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }
  loginData: any = []

  ngOninit() {
  }

  CheckUser() {
    console.log(this.loginForm.value);
    
    this.service.CheckUser(this.loginForm.value).subscribe((data) => {
      this.loginData = data
      
      alert('Login Successful')
      if (this.loginData.user.role === 'admin') {
        localStorage.setItem('role','admin') // Assigning flag to local storage
        localStorage.setItem('name', this.loginData.user.username)
        this.route.navigate(['/admin/all'])
      } else {
        localStorage.setItem('role','user')  // Assigning flag to local storage
        localStorage.setItem('name', this.loginData.user.username)
        this.route.navigate(['/user/home'])
      }
    },((err) => {
      if(err.status===404){
        alert('Incorrect Username')
      }
      else if(err.status==400) alert('Incorrect Password')
    })
  
  )}

}
