import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        PagesComponent,
    ],
    imports: [
        PagesRoutingModule,
        SharedModule,
    ],
    
})
export class PagesModule { }