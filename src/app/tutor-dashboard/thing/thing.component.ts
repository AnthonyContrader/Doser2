import { Component, OnInit } from '@angular/core';
import { RoomDTO } from 'src/app/dto/roomdto';
import { ThingService } from 'src/app/services/thing.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ThingDTO } from 'src/app/dto/thingdto';
import { ItemDTO } from 'src/app/dto/itemdto';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

    room: RoomDTO;
    things: ThingDTO[];
    thing: ThingDTO;
    thingService: ThingService;
    itemService: ItemService;
    route: ActivatedRoute;
    location: Location;
    id: number;
    selectedthing: ThingDTO;
    item: ItemDTO;
    items: ItemDTO[];

  constructor( route: ActivatedRoute, thingService: ThingService, location: Location, itemService: ItemService) {
        this.thingService = thingService;
        this.itemService = itemService;
        this.route = route;
        this.location = location;
    }
  ngOnInit() {
      this.item = new ItemDTO();
      this.thing = this.read();
      this.things = new Array<ThingDTO>();
      this.things = this.getAllBy();
      this.route.params.subscribe(() => this.things = this.getAllBy());

  }

  getAllBy(): ThingDTO[] {
        this.id = JSON.parse(localStorage.getItem('currentRoom')).id;
        this. thingService.getAllBy(this.id).subscribe( things => this. things =  things);
        return this.things;
    }

     update(): void {
      this.thingService.update(this.thing).subscribe(thing => this.thing = thing );
    }


    select(thing: ThingDTO) {
        this.selectedthing = thing;
    }

    insert() {
        this.item.thing = JSON.parse(localStorage.getItem('currentThing'));
        this.itemService.insert(this.item).subscribe(() => this.getAllItemsBy());
    }

        getAllItemsBy() {
        this.itemService.getAllBy(this.thing.id).subscribe(items => this.items = items);
    }



    read(): ThingDTO {
      const id = +this.route.snapshot.paramMap.get('id');
      this.thingService.read(id).subscribe(thing => {
          this.thing = thing;
          this.getAllItemsBy();
        });
      return this.thing;
  }

}
