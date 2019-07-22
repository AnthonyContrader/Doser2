import { Component, OnInit } from '@angular/core';
import { PasswordchangeDTO } from 'src/dto/passwordchangedto';
import { PasswordchangeService } from 'src/service/passwordchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  passwordchangeDTO: PasswordchangeDTO;
  constructor(private passwordchangeService: PasswordchangeService, private router: Router) { }

  ngOnInit() {
    this.passwordchangeDTO = new PasswordchangeDTO();
  }

  changepassword(passwordchange: PasswordchangeDTO): void {
    this.passwordchangeService.changepassword(this.passwordchangeDTO).subscribe(() => 
      this.router.navigate(['/doctor-dashboard']))
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
