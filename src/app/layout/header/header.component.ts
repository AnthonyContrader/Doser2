import { Component, OnInit } from '@angular/core';
import { TutorDTO } from 'src/app/dto/tutordto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user: TutorDTO;

  constructor() { }

  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

}
