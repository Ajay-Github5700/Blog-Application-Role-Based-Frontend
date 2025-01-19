import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { PendingBlogsComponent } from './Admin-Access/pending/pending-blogs/pending-blogs.component';
import { AdminNavbarComponent } from './Admin-Access/admin-navbar/admin-navbar.component';
import { ApprovedBlogComponent } from './Admin-Access/approved-blog/approved-blog.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddBlogComponent } from './User-Access/add-blog/add-blog.component';
import { HomeComponent } from './User-Access/home/home.component';
import { AllBlogsComponent } from './Admin-Access/all-blogs/all-blogs.component';
import { UserComponent } from './Admin-Access/User-Controller/user/user.component';
import { adminGard, isLoggedInGard, userGard } from './auth-gard.guard';
import { WhildCartComponent } from './404/whild-cart/whild-cart.component';
import { DetailedBlogComponent } from './detailed/detailed-blog/detailed-blog.component';
import { MyBlogsComponent } from './User-Access/my-blogs/my-blogs.component';

const routes: Routes = [
  {canActivate:[isLoggedInGard], path:'',component: LoginComponent},
  {path:'login', component: LoginComponent},
  
  {path:'user', component:NavbarComponent,
    children:[
      {path:'', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'add-blog', component:AddBlogComponent},
      {path:'my-blogs', component:MyBlogsComponent},
    ],
    canActivate: [userGard]
  },
  {path:'admin', component:AdminNavbarComponent,
    children:[
      {path:'all', component:AllBlogsComponent},
      {path:'pending', component:PendingBlogsComponent},
      {path:'approved', component:ApprovedBlogComponent},
      {path:'register',component: RegisterComponent},
      {path:'allusers', component:UserComponent},
      {path:'all/detailed/:_id', component:DetailedBlogComponent},
    ],
    canActivate:[adminGard]
  },
  {path:'update-user/:id', component:RegisterComponent, canActivate: [adminGard]},
  {path:'**', component:WhildCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
