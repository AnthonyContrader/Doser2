import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { ClientDTO } from '../dto/clientdto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends AbstractService<ClientDTO> {

constructor(http: HttpClient) {
        super(http);
        this.type = 'client';
        this.port = '8080';
    }
}
