import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Notification1Component } from './notification1/notification1.component';
import { UsernotpaymentComponent } from './usernotpayment/usernotpayment.component';

@NgModule({
  declarations: [UserDetailsComponent, Notification1Component, UsernotpaymentComponent],
  imports: [
    CommonModule
  ]
})
export class SuperuserDashboardModule { }
