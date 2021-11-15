import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { MainModule } from '../main/main.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    MainModule,
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
