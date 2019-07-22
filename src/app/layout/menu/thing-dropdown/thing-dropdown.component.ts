import { Component, OnInit, Input } from '@angular/core';
import { RoomDTO } from 'src/app/dto/roomdto';
import { ThingDTO } from 'src/app/dto/thingdto';
import { ThingService } from 'src/app/services/thing.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thing-dropdown',
  templateUrl: './thing-dropdown.component.html',
  styleUrls: ['./thing-dropdown.component.css']
})
export class ThingDropdownComponent implements OnInit {

   @Input() room: RoomDTO;
    things: ThingDTO[];
    thingService: ThingService;
    route: ActivatedRoute;
    location: Location;
    id: number;
    selectedthing: ThingDTO;
    isCollapsed = false;

  constructor( route: ActivatedRoute, thingService: ThingService, location: Location) {
        this.thingService = thingService;
        this.route = route;
        this.location = location;
    }
  ngOnInit() {
      this.things = new Array<ThingDTO>();
      this.things = this.getAllBy();
      this.route.params.subscribe(() => this.things = this.getAllBy());

  }

  getAllBy(): ThingDTO[] {
        this.id = +JSON.parse(localStorage.getItem('currentRoom')).id;
        this. thingService.getAllBy(this.id).subscribe( things => this. things =  things);
        return this.things;
    }

    select(thing: ThingDTO) {
        localStorage.setItem('currentThing', JSON.stringify(thing));
        this.selectedthing = thing;
    }

    collapse() {
        if (this.isCollapsed === false) {
            this.isCollapsed = true;
        } else { this.isCollapsed = false; }
    }
}
