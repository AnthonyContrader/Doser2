import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/app/dto/clientdto';
import { ClientService } from 'src/app/services/client.service';
import { TutorDTO } from 'src/app/dto/tutordto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    user: TutorDTO;
    clients: ClientDTO[];
    isCollapsed = false;
    isClientCollapsed = false;
    isAccountCollapsed = false;

  constructor(private service: ClientService, private router: Router) {
  }

  ngOnInit() {
      this.clients = new Array<ClientDTO>();
      this.getAllBy();
      this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

    getAllBy() {
        this.service.getAllBy(+JSON.parse(localStorage.getItem('currentUser')).id).subscribe(clients => this.clients = clients);
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('');
    }


    collapse() {
        if (this.isCollapsed === false) {
            this.isCollapsed = true;
        } else { this.isCollapsed = false; }
    }

    clientcollapse() {
        if (this.isClientCollapsed === false) {
            this.isClientCollapsed = true;
        } else { this.isClientCollapsed = false; }
    }

    accountcollapse() {
        if (this.isAccountCollapsed === false) {
            this.isAccountCollapsed = true;
        } else { this.isAccountCollapsed = false; }
    }
}
