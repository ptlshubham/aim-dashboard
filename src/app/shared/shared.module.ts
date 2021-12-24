import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { GlobalheaderComponent } from './globalheader/globalheader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    GlobalheaderComponent

  ]
})
export class SharedModule { }
