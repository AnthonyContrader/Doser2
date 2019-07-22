import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ApartmentDTO } from 'src/app/dto/apartmentdto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-dropdown',
  templateUrl: './apartment-dropdown.component.html',
  styleUrls: ['./apartment-dropdown.component.css']
})
export class ApartmentDropdownComponent implements OnInit {

    isCollapsed = false;
    apartmentService: ApartmentService;
    apartments: ApartmentDTO[];
    insapartment: ApartmentDTO;
    id: number;
    route: ActivatedRoute;
    selectedapt: ApartmentDTO;

    constructor(apartmentService: ApartmentService, route: ActivatedRoute) {
        this.apartmentService = apartmentService;
        this.route = route;
    }


 ngOnInit() {
      this.apartments = this.getAllBy();
      this.insapartment = new ApartmentDTO();
      this.selectedapt = new ApartmentDTO();
      this.insapartment.tutor_id = +JSON.parse(localStorage.getItem('currentUser')).id;
      this.route.params.subscribe(() => this.getAllBy());
  }


  select(apartment: ApartmentDTO) {
        this.selectedapt = apartment;
  }

  getAllBy(): ApartmentDTO[] {
        this.id = JSON.parse(localStorage.getItem('currentUser')).id;
        this.apartmentService.getAllBy(this.id).subscribe(apartments => this.apartments = apartments);
        return this.apartments;
    }

 insert() {
        this.apartmentService.insert(this.insapartment).subscribe(() => this.getAllBy());
    }

        collapse() {
        if (this.isCollapsed === false) {
            this.isCollapsed = true;
        } else { this.isCollapsed = false; }
    }

}
