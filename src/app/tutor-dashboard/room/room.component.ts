import { Component, OnInit } from '@angular/core';
import { RoomDTO } from 'src/app/dto/roomdto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RoomService } from 'src/app/services/room.service';
import { ThingDTO } from 'src/app/dto/thingdto';
import { ThingService } from 'src/app/services/thing.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    room = new RoomDTO();
    route: ActivatedRoute;
    roomService: RoomService;
    location: Location;
    thing: ThingDTO;
    things: ThingDTO[];

    constructor( route: ActivatedRoute, roomService: RoomService, location: Location, private thingService: ThingService) {
        this.roomService = roomService;
        this.route = route;
        this.location = location;
    }

    ngOnInit() {
        this.thing = new ThingDTO();
        if ( +this.route.snapshot.paramMap.get('id') !== 0) {
            this.read();
        }
        this.route.params.subscribe(
        () => this.read());
        this.getAllThingsBy();
    }

     update(): void {
      this.roomService.update(this.room).subscribe(room => this.room = room );
    }

    goBack(): void {
      this.location.back();
  }

    read(): RoomDTO {
      const id = +this.route.snapshot.paramMap.get('id');
      this.roomService.read(id).subscribe(room => this.room = room);
      return this.room;
  }


        insert() {
        this.thing.room = JSON.parse(localStorage.getItem('currentRoom'));
        console.log(this.thing);
        this.thingService.insert(this.thing).subscribe(() => this.getAllThingsBy());
    }
        getAllThingsBy() {
        this.thingService.getAllBy(+this.route.snapshot.paramMap.get('id')).subscribe(things => this.things = things);
    }

}
