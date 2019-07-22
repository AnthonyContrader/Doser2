import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/dto/userdto';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    user: UserDTO;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.user = new UserDTO();
      this.read();
  }

      read() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService.read(id).subscribe(user => this.user = user);
  }
}
