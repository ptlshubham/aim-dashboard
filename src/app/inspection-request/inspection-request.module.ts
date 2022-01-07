import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabSearchComponent } from './tab-search/tab-search.component';

import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InspectionRequestRoutes } from './inspection-request.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TabSearchComponent
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(InspectionRequestRoutes),
	FormsModule,
    SharedModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
  ]
})
export class InspectionRequestModule { }
