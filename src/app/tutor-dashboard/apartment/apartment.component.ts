import { Component, OnInit } from '@angular/core';
import { ApartmentDTO } from '../../dto/apartmentdto';
import { ApartmentService } from '../../services/apartment.service';
import { RoomDTO } from 'src/app/dto/roomdto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { ClientDTO } from 'src/app/dto/clientdto';
import { RoomService } from 'src/app/services/room.service';
import { UserDTO } from 'src/app/dto/userdto';


@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

    apartment = new ApartmentDTO();
    room: RoomDTO;
    route: ActivatedRoute;
    apartmentService: ApartmentService;
    location: Location;
    clientService: ClientService;
    clients: ClientDTO[];
    roomService: RoomService;
    rooms: RoomDTO[];

    constructor( route: ActivatedRoute, apartmentService: ApartmentService,
                 clientService: ClientService, roomService: RoomService, location: Location) {
        this.apartmentService = apartmentService;
        this.route = route;
        this.location = location;
        this.clientService = clientService;
        this.roomService = roomService;
    }

    ngOnInit() {
        this.room = new RoomDTO();
        if ( +this.route.snapshot.paramMap.get('id') !== 0) {
            this.read();
        }
        this.route.params.subscribe(
        (params) => this.read());
        this.clients = new Array<ClientDTO>();
        this.getAllBy();
        this.getAllRoomsBy();
    }

     update(): void {
      this.apartmentService.update(this.apartment).subscribe(apartment => this.apartment = apartment );
    }

    goBack(): void {
      this.location.back();
  }

    read(): ApartmentDTO {
      const id = +this.route.snapshot.paramMap.get('id');
      this.apartmentService.read(id).subscribe(apartment => this.apartment = apartment);
      return this.apartment;
  }

    delete(user: UserDTO) {
        this.apartmentService.delete(user.login).subscribe(() => this.location.back());
    }

    getAllBy() {
        this.clientService.getAllBy(+this.route.snapshot.paramMap.get('id')).subscribe(clients => this.clients = clients);
    }

    getAllRoomsBy() {
        this.roomService.getAllBy(+this.route.snapshot.paramMap.get('id')).subscribe(rooms => this.rooms = rooms);
    }

    insert() {
        this.room.apartment = this.apartment;
        this.roomService.insert(this.room).subscribe(() => this.getAllRoomsBy());
    }

}
