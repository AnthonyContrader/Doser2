import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { EventDTO } from '../dto/eventdto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DateDTO } from '../dto/datedto';

@Injectable({
  providedIn: 'root'
})
export class EventService extends AbstractService<EventDTO> {

    constructor(http: HttpClient) {
        super(http);
        this.type = 'event';
        this.port = '8080';
    }

    getAllByItemAndDate(id: number, date: Date): Observable<EventDTO[]> {
        return this.http.post<EventDTO[]>('http://localhost:8080/event/event', new DateDTO(id, date.toISOString()));
    }

}

