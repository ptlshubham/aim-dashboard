import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IndexDashboardComponent,
    ResultDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(DashboardRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
