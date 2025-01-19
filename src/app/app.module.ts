import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ApprovedBlogComponent } from './Admin-Access/approved-blog/approved-blog.component';
import { PendingBlogsComponent } from './Admin-Access/pending/pending-blogs/pending-blogs.component';
import { AdminNavbarComponent } from './Admin-Access/admin-navbar/admin-navbar.component';
import { AddBlogComponent } from './User-Access/add-blog/add-blog.component';
import { HomeComponent } from './User-Access/home/home.component';
import { AllBlogsComponent } from './Admin-Access/all-blogs/all-blogs.component';
import { UserComponent } from './Admin-Access/User-Controller/user/user.component';
import { WhildCartComponent } from './404/whild-cart/whild-cart.component';
import { DetailedBlogComponent } from './detailed/detailed-blog/detailed-blog.component';
import { MyBlogsComponent } from './User-Access/my-blogs/my-blogs.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PendingBlogsComponent,
    ApprovedBlogComponent,
    AdminNavbarComponent,
    AddBlogComponent,
    HomeComponent,
    AllBlogsComponent,
    UserComponent,
    WhildCartComponent,
    DetailedBlogComponent,
    MyBlogsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
