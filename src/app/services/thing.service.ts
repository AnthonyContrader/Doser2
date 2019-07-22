import { Injectable } from '@angular/core';
import { ThingDTO } from 'src/app/dto/thingdto';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstractservice';

@Injectable({
  providedIn: 'root'
})

export class ThingService extends AbstractService<ThingDTO> {

    constructor(shttp: HttpClient) {
        super(shttp);
        this.type = 'thing';
        this.port = '8080';
    }

}
