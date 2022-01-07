import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalheaderComponent } from './globalheader/globalheader.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
	  HeaderComponent,
	  FooterComponent,
   GlobalheaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    GlobalheaderComponent

  ]
})
export class SharedModule { }
