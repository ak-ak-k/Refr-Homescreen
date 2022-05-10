import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: "", component: PagesComponent, children: [
            { path: "", redirectTo: 'shop-details', pathMatch: 'full' },
            { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: "address", loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
            { path: "shop-details", loadChildren: () => import('./shop-details/shop-details.module').then(m => m.ShopDetailsModule) },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }