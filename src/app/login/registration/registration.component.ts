import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../../dto/userdto';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    userDTO: UserDTO;
    constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userDTO = new UserDTO();
  }

  register(): void {
    this.userService.insert(this.userDTO).subscribe((response) => {
    if (response != null) {
    this.router.navigateByUrl('/login');
      }
      });
}
}
