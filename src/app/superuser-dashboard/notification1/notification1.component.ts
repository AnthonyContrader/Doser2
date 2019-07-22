import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import {UserDTO} from '../../dto/userdto'



@Component({
  selector: 'app-notification1',
  templateUrl: './notification1.component.html',
  styleUrls: ['./notification1.component.css']
})
export class Notification1Component implements OnInit {

  constructor(public service:UserService) { }
 
  users: UserDTO[];
  
  ngOnInit() {
  this.polling();
}

polling (){
    
      interval(1000)
      .pipe(
          startWith(0),
          switchMap(() => this.service.getAll())
          )
          .subscribe(users => this.users = users);
  }

}
