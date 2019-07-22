import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { SuperuserDTO } from '../dto/superuserdto';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserDTO } from '../dto/userdto';

@Component({
  selector: 'app-superuser-dashboard',
  templateUrl: './superuser-dashboard.component.html',
  styleUrls: ['./superuser-dashboard.component.css']
})
export class SuperuserDashboardComponent implements OnInit {

    
    userService: UserService;
    route: ActivatedRoute;
    location: Location;
    users: UserDTO[];
    operators: UserDTO[];
    tutors: UserDTO[];

  constructor( route: ActivatedRoute, userService: UserService, location: Location) {
        this.userService = userService;
        this.route = route;
        this.location = location;

  }

  ngOnInit() {
    this.getAll();
  }
    getAll() {
        this.userService.getAll().subscribe(users => {
            this.users = users ;
            this.separate(this.users);
        });
    }


    delete(user: UserDTO) {
        this.userService.delete(user.login).subscribe(() => this.getAll());
    }

    separate(users: UserDTO[]) {
        this.operators = new Array<UserDTO>();
        this.tutors = new Array<UserDTO>();
        for (const user of users) {
            if (user.authorities.toString() === 'OPERATOR') {
                this.operators.push(user);
            } else if (user.authorities.toString() === 'TUTOR') {
                this.tutors.push(user);
                   }
        }
    }

}
