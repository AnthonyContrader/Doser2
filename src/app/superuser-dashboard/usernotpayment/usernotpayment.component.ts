import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/dto/userdto';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usernotpayment',
  templateUrl: './usernotpayment.component.html',
  styleUrls: ['./usernotpayment.component.css']
})
export class UsernotpaymentComponent implements OnInit {
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
