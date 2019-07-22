import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';

/**
 * Questo modulo serve unicamente Login e Registrazione (non implementata)
 * Importa il suo modulo di routing
 * 
 * @author Vittorio Valent
 */
@NgModule({
  declarations: [LoginComponent, WorkInProgressComponent ],

  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
  
})
export class LoginModule { }
