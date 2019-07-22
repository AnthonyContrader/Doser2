import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
      LoginComponent,
      RegistrationComponent,
  ],
  imports: [
    CommonModule,
   LoginRoutingModule,
    FormsModule
  ],

  exports: [
    FormsModule
  ]
})
export class LoginModule { }
