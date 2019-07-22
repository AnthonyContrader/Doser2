import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/app/dto/clientdto';
import { ClientService } from 'src/app/services/client.service';
import { Location } from '@angular/common';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ApartmentDTO } from 'src/app/dto/apartmentdto';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    clientDTO: ClientDTO;
    apartments: ApartmentDTO[];

  constructor(private clientService: ClientService, private apartmentService: ApartmentService, private location: Location) { }

  ngOnInit() {
      this.clientDTO = new ClientDTO();
      this.getAllBy();
  }



   register(): void {
    this.clientDTO.tutor_id = +JSON.parse(localStorage.getItem('currentUser')).id;
    this.clientService.insert(this.clientDTO).subscribe((response) => {
        if (response != null) {
            this.location.back();
        }
      });
    }

    getAllBy() {
        this.apartmentService.getAllBy( +JSON.parse(localStorage.getItem('currentUser')).id)
        .subscribe(apartments => this.apartments = apartments);
    }
}
