import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomDTO } from 'src/app/dto/roomdto';
import { AbstractService } from './abstractservice';


@Injectable({
  providedIn: 'root'
})

export class RoomService extends AbstractService<RoomDTO> {

    constructor(shttp: HttpClient) {
        super(shttp);
        this.type = 'room';
        this.port = '8080';
    }
}




