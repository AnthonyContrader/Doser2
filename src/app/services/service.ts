import { Observable } from 'rxjs';

export interface Service<DTO> {

    read(id: number): Observable<DTO> ;

    delete(login: string): Observable<any>;

    update(dto: DTO): Observable<any> ;

    insert(dto: DTO): Observable<any>;

    getAll(): Observable<DTO[]>;

}
