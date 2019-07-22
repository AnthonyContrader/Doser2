import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../../dto/userdto';
import { UserService } from 'src/service/user.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    userDTO: UserDTO;
    passtoinsert: UserDTO = new UserDTO();
    constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userDTO = new UserDTO();
  }

  register(user: UserDTO): void {
    this.userService.register(this.passtoinsert).subscribe(() => 
      this.router.navigate(['login']))
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  clear(){
    this.passtoinsert = new UserDTO();
  }
}