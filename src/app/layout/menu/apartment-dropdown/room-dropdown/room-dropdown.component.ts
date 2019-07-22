import { Component, OnInit, Input } from '@angular/core';
import { RoomDTO } from 'src/app/dto/roomdto';
import { RoomService } from 'src/app/services/room.service';
import { ApartmentDTO } from 'src/app/dto/apartmentdto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-dropdown',
  templateUrl: './room-dropdown.component.html',
  styleUrls: ['./room-dropdown.component.css']
})
export class RoomDropdownComponent implements OnInit {

    @Input() apartment: ApartmentDTO;
    roomService: RoomService;
    rooms: RoomDTO[];
    insroom: RoomDTO;
    id: number;
    route: ActivatedRoute;
    selectedroom: RoomDTO;
    isCollapsed = false;

    constructor(roomService: RoomService, route: ActivatedRoute) {
        this. roomService =  roomService;
        this.route = route;
    }

 ngOnInit() {
      this.getAllBy();
      this.insroom = new RoomDTO();
      this.insroom.apartment = this.apartment;
      this.route.params.subscribe(() =>  this.getAllBy());
  }

  getAllBy() {
        this.id = this.apartment.id;
        this. roomService.getAllBy(this.id).subscribe( rooms => this. rooms =  rooms);

    }

 insert() {
        this.roomService.insert(this.insroom).subscribe(() => this.getAllBy());
    }

    select(room: RoomDTO) {
        this.selectedroom = room;
        localStorage.setItem('currentRoom', JSON.stringify(room));
    }

     collapse() {
        if (this.isCollapsed === false) {
            this.isCollapsed = true;
        } else { this.isCollapsed = false; }
    }

    // openMenu() {
    //     document.getElementById('thingMenu').style.width = '550%';
    //     document.getElementById('thingMenu').style.zIndex = '20';
    // }

    // closeMenu() {
    //     document.getElementById('thingMenu').style.marginLeft = '100%';
    // }
    // openNav() {
    // document.getElementById('mySidenav').style.width = '250px';
    // document.getElementById('main').style.marginLeft = '250px';
    // }

    // closeNav() {
    // document.getElementById('mySidenav').style.width = '0';
    // document.getElementById('main').style.marginLeft = '0';
    // }
}
