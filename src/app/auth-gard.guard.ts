import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const adminGard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  if (localStorage.getItem('role') === 'admin') {
    return true;
  }
  else {
    alert('You are not authorized to access this page, Log-in as Admin')
    router.navigate(['/login'])
    return false;
  }
};


export const userGard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem('role') === 'user') {
    return true;
  }
  else {
    alert('You are not authorized to access this page, Please Log as User')
    router.navigate(['/login'])
    return false;
  }
};

export const isLoggedInGard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isLoogedIn = localStorage.getItem('role')

  if (isLoogedIn) {
    if (isLoogedIn === 'admin') {
      router.navigate(['/admin/all'])
    }
    else{
      router.navigate(['/user/home'])
    }
    return false;
  }
  else {
    return true;
  }
};