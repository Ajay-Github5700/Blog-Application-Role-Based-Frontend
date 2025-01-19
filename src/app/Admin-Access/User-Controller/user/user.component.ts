import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/userService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  allUserData: any = []
  currentUser= localStorage.getItem('name')
  constructor(private service: UserService, private route: Router) {
    this.service.getAllUsers().subscribe(data => {
      this.allUserData = data
    })
  }
  ngOnInit(): void {
  }

  deleteUser(id: string, name: string, role:string) {
    const ok = confirm(`Are you sure you want to delete this user? ${name}`)
    if (ok && role=='user') {
      this.service.deleteUser(id).subscribe((data) => {
        alert('User Deleted Successfully')
        location.reload()
      },(err)=>{
        alert('User Not Deleted')
      })
    }else{
      alert("Can't delete Admin Account" )
    }

  }


}
