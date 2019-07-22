import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ItemDTO } from 'src/app/dto/itemdto';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public service: ItemService) { }
   
  items: ItemDTO[];

  ngOnInit() {
    this.polling();
   
    }

    polling(){

      interval(1000)
      .pipe(
          startWith(0),
          switchMap(() => this.service.getAll())
          )
          .subscribe(items => this.items = items);
    }

}
