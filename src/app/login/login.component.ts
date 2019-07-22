import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { NgForOf } from '@angular/common';
import { LoginDTO } from '../dto/logindto';
import { UserService } from '../services/user.service';
import { UserDTO } from '../dto/userdto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);

    this.service.login(this.loginDTO).subscribe((token : any) => {
      localStorage.setItem("AUTOKEN", JSON.stringify({ "authorities": token.id_token }));
      localStorage.setItem("currentUser", JSON.stringify({ "authorities": token.id_token }));
      this.service.userLogged(this.loginDTO.username).subscribe((user:UserDTO)=>{

      if (user != null) {
        localStorage.setItem('AUTOKEN', JSON.stringify(user));
        console.log(user.authorities);

        switch (user.authorities.toString()) {
          case 'ROLE_SUPERUSER': {
            this.router.navigate(['/superuser-dashboard']);
            break;
          }
          case 'ROLE_TUTOR': {
            this.router.navigate(['/tutor-dashboard']);
            break;
          }
          case 'ROLE_OPERATOR': {
            this.router.navigate(['/operator-dashboard']);
            break;
          }
          case 'ROLE_TESTUSER': {
            this.router.navigate(['/testuser-dashboard']);
            break;
          }

          default:
            this.router.navigate(['/login']);
      }
    }
      else{
          alert("Wrong username or password");
        }
      });
    });
    }

    register(): void {
      this.router.navigate(['/registration']);
    }
    
}

