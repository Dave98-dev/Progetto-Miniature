import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import {MatTabsModule} from '@angular/material/tabs'; 

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
