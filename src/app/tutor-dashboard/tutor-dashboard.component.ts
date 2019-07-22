import { Component, OnInit } from '@angular/core';
import { ApartmentDTO } from '../dto/apartmentdto';
import { ClientDTO } from '../dto/clientdto';
import { ApartmentService } from '../services/apartment.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.css']
})
export class TutorDashboardComponent implements OnInit {

  apartmentlist: ApartmentDTO[];
  clientlist: ClientDTO[];
  currentEntity: string = 'currentUser';
  id: number;
  apartment: ApartmentDTO;
  client: ClientDTO;
  constructor(public apartmentService: ApartmentService, public clientService: ClientService) {

  }

  ngOnInit() {
    this.getAllApartmentsBy();
    this.getAllClientsBy();
    console.log(this.clientlist);
  }

  getAllApartmentsBy(): ApartmentDTO[] {
    this.id = JSON.parse(localStorage.getItem(this.currentEntity)).id;
    this.apartmentService.getAllBy(this.id).subscribe(apartmentlist => this.apartmentlist = apartmentlist);
    return this.apartmentlist;
}

getAllClientsBy(): ClientDTO[] {
  this.id = JSON.parse(localStorage.getItem(this.currentEntity)).id;
  this.clientService.getAllBy(this.id).subscribe(clientlist => this.clientlist = clientlist);
  return this.clientlist;
}

}
