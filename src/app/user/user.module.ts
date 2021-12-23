import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { MainModule } from '../main/main.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    MainModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ],

})
export class UserModule { }
