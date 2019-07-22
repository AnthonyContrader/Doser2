import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { ItemDTO } from '../dto/itemdto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService extends AbstractService<ItemDTO> {

  constructor(http: HttpClient) {
      super(http);
      this.type = 'item';
      this.port = '8080';
  }
}
