import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopDetailsRoutingModule } from './shop-details-routing.module';
import { ShopDetailsComponent } from './shop-details.component';

@NgModule({
    declarations: [
        ShopDetailsComponent
    ],
    imports: [
        ShopDetailsRoutingModule,
        SharedModule,
        MaterialModule
    ],
    
})
export class ShopDetailsModule { }