import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    HeaderComponent,
    SearchComponent,
    TabComponent,
  ]
})
export class SharedModule { }
