import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }
  showLogoutAlert = false

  isLogout() {
    this.showLogoutAlert = true;
  }

  logout(){
    this.showLogoutAlert = false;
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  cancle(){
    this.showLogoutAlert = false;
  }
}
