import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/dto/userdto';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstractservice';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/logindto';

@Injectable({
  providedIn: 'root'
})

export class UserService extends AbstractService<UserDTO> {

    constructor(http: HttpClient) {
        super(http);
        this.type = 'users';
        this.port = '8080';
    }

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
  
    register(userDTO: UserDTO): Observable<UserDTO> {
      return this.http.post<any>('http://localhost:8080/api/register', userDTO);
    }
    
   
  }
