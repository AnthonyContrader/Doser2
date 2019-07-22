import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { TestuserDashboardComponent } from './testuser-dashboard/testuser-dashboard.component';
import { SuperuserDashboardComponent } from './superuser-dashboard/superuser-dashboard.component';
import { UserDetailsComponent } from './superuser-dashboard/user-details/user-details.component';
import { UsernotpaymentComponent } from './superuser-dashboard/usernotpayment/usernotpayment.component';




const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'testuser-dashboard', component: TestuserDashboardComponent},
    { path: 'superuser-dashboard', component: SuperuserDashboardComponent},
    { path: 'user-details/:id', component: UserDetailsComponent},
    {path: 'usernotpayment/:id', component: UsernotpaymentComponent}
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [
        RouterModule.forRoot(routes),

    ],

  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
