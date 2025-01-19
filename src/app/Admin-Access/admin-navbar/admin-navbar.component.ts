import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  constructor(private router: Router) { 

    
  }

  logOutUsers () {
    const ok= confirm('Are you sure you want to logout?')
    if(ok){
      localStorage.removeItem('role')
      localStorage.removeItem('name')
      this.router.navigate(['/login'])
    }
  }

}
