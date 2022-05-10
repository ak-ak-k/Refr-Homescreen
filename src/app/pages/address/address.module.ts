import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressRoutingRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';

@NgModule({
    declarations: [
        AddressComponent
    ],
    imports: [
        AddressRoutingRoutingModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    
})
export class AddressModule { }