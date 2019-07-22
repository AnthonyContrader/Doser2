import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { TutorDashboardModule } from './tutor-dashboard/tutor-dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { TestuserDashboardComponent } from './testuser-dashboard/testuser-dashboard.component';
import { SuperuserDashboardComponent } from './superuser-dashboard/superuser-dashboard.component';
import { UserDetailsComponent } from './superuser-dashboard/user-details/user-details.component';
import { Notification1Component } from './superuser-dashboard/notification1/notification1.component';
import { UsernotpaymentComponent } from './superuser-dashboard/usernotpayment/usernotpayment.component';



@NgModule({
  declarations: [
    AppComponent,
    TestuserDashboardComponent,
    SuperuserDashboardComponent,
    UserDetailsComponent,
    Notification1Component,
    UsernotpaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    LoginModule,
    LayoutModule,
    TutorDashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
