import { ModelComponent } from './model/model.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
  {
    path: 'manufacturer',
    component: ManufacturerComponent,
    data: { page: 'manufacturer' }
  },
  {
    path: 'model',
    component: ModelComponent,
    data: { page: 'model' }
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: { page: 'inventory' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
