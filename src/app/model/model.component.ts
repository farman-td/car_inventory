import { AlertifyService } from './../services/alertify.service';
import { ModelService } from './../services/model.service';
import { ManufacturerService } from './../services/manufacturer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  manufacturerList;
  model: any = {};

  constructor(
    private ms: ManufacturerService,
    private mo: ModelService,
    private alertify: AlertifyService) {
    this.ms.getManufacturer().subscribe(res => {
      this.manufacturerList = res;
    });
  }

  save(model) {
    this.mo.create(model).subscribe(res => {
      this.alertify.success(res.data.message);
    });
  }

}
