import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AbstractComponent } from '../abstract/abstract.component';
import { ItemDTO } from '../dto/itemdto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-testuser-dashboard',
  templateUrl: './testuser-dashboard.component.html',
  styleUrls: ['./testuser-dashboard.component.css']
})
export class TestuserDashboardComponent extends AbstractComponent<ItemDTO> implements OnInit {


constructor(service: ItemService, location: Location) {
      super(service, location);
  }

  ngOnInit() {
    this.getAll();
  }

    setfalse(item: ItemDTO) {
      item.status = false;
      this.service.update(item).subscribe(() => this.getAll());
    }
    settrue(item: ItemDTO) {
      item.status = true;
      this.service.update(item).subscribe(() => this.getAll());
    }

}
