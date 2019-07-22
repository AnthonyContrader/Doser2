import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';


/**
 * Routing del LoginModule. gestisce il routing per le pagine di login 
 * (ed eventualmente di registrazione). Come ogni modulo di routing, viene 
 * importato nel suo modulo.
 * 
 * @see LoginModule
 * 
 * @author Vittorio Valent
 */
const routes: Routes = [
  { path:'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
