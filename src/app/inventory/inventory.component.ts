import { AlertifyService } from './../services/alertify.service';
import { ModelService } from './../services/model.service';
import { Component, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  modelList: Observable<any>;
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private mo: ModelService,
    private alertify: AlertifyService) {
    this.mo.getModels().subscribe(res => {
      this.modelList = res;
      // ADD THIS
      this.dtTrigger.next();
    });
  }

  sellCar(model) {
    const id = model.modelId;

    this.mo.sellCar(id).subscribe(res => {
      this.modelList = res;
      this.alertify.success('This car has been sold successfully')
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
