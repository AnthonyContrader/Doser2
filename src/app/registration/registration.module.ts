import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';

/**
 * Questo modulo serve unicamente Login e Registrazione (non implementata)
 * Importa il suo modulo di routing
 * 
 * @author Vittorio Valent
 */
@NgModule({
  declarations: [RegistrationComponent ],

  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ],
  
})
export class RegistrationModule { }
