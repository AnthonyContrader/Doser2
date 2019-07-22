import { Injectable } from '@angular/core';
import { UserDTO } from 'src/dto/userdto';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';
import { PasswordchangeDTO } from 'src/dto/passwordchangedto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordchangeService {

  constructor(protected http: HttpClient) { }

  auth() {
    const user = JSON.parse(localStorage.getItem('currentUser')) as UserDTO;
    if (user) {
      return 'Bearer ' + user.authorities;
    } else {
      return '';
    }
  }

  login(loginDTO: LoginDTO): Observable<UserDTO> {
    return this.http.post<any>('http://localhost:8080/api/authenticate', loginDTO);
  }

  userLogged(username: string) {
   // console.log('qua: ', this.auth());
    console.log(this.auth());
    return this.http.get('http://localhost:8080/api/users/' + username, {
      headers: {
        Authorization: this.auth()
      }
    });
  }

  changepassword(passwordchangeDTO: PasswordchangeDTO): Observable<PasswordchangeDTO> {
    return this.http.post<any>('http://localhost:8080/api/account/change-password', passwordchangeDTO, {
      headers: {
        Authorization: this.auth()
      }
    });
  }
}
