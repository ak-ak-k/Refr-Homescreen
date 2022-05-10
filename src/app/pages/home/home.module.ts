import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    
})
export class HomeModule { }