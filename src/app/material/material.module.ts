import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import {
  MatSidenavModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatInputModule,
  MatListModule
} from '@angular/material';


@NgModule({
  imports: [MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatInputModule],
  exports: [MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatInputModule]
})


export class MaterialModule { }
