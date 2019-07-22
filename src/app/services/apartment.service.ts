import { Injectable } from '@angular/core';
import { ApartmentDTO } from '../dto/apartmentdto';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstractservice';

@Injectable({
  providedIn: 'root'
})

export class ApartmentService extends AbstractService<ApartmentDTO> {

      constructor(http: HttpClient) {
        super(http);
        this.type = 'apartment';
        this.port = '8080';
    }
}
