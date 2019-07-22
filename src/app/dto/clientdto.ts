import { ApartmentDTO } from './apartmentdto';

export class ClientDTO {

    id: number;

    name: string;

    surname: string;

    birthdate: Date;

    telnumber: string ;

    apartment: ApartmentDTO;

// tslint:disable-next-line: variable-name
    tutor_id: number;
}
