import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MainComponent } from './mainSite/main/main.component';
import { SingleShopComponent } from './shop/single-shop/single-shop.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'shop/:code', component:SingleShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
