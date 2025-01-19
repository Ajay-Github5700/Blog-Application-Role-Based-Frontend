import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  registeredData: any = []

  userIdForUpdate: string = ''
  updateUserData: any = {}
  constructor(private service: BlogService, private route: Router, private activeRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      role: new FormControl('', Validators.required)
    })

    this.userIdForUpdate = this.activeRoute.snapshot.params['id']
    if (this.userIdForUpdate) {
      this.userService.getUserById(this.userIdForUpdate).subscribe(data => {
        this.registerForm.patchValue(data)
      })
    }

  }
  onsave() {
    this.service.RegisterUser(this.registerForm.value).subscribe(data => {
      this.registeredData = data
      alert('Registered Successfully')
      console.log(this.registeredData)
      this.route.navigate(['login'])
    },(error)=>{
      if(error.status==400){
        alert('Username Already Exists')
      }
    })
  }

  onEdit() {
    this.userService.updateUser(this.userIdForUpdate, this.registerForm.value).subscribe(data => {
      this.updateUserData = data
      alert('User Updated Successfully')
      this.route.navigateByUrl('admin/allusers')
    })
  }


}
