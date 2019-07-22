import {ApartmentDTO} from './apartmentdto';
import { ThingDTO } from './thingdto';


export class RoomDTO {

    id: number;
    description: string;
    apartment: ApartmentDTO;
    things: ThingDTO[];
}
