import { AlertifyService } from './../services/alertify.service';
import { ManufacturerService } from './../services/manufacturer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  manufacturer: any = {};

  constructor(
    private ms: ManufacturerService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  save(manufacturer) {
    this.ms.create(manufacturer).subscribe(res => {
      this.alertify.success(res.data.message);
    });
  }

}
