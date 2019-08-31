import { AlertifyService } from './services/alertify.service';
import { ManufacturerService } from './services/manufacturer.service';
import { ModelService } from './services/model.service';
import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ModelComponent } from './model/model.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ManufacturerComponent,
    ModelComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    ManufacturerService,
    ModelService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
