import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { TutorDashboardComponent } from './tutor-dashboard.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { RoomComponent } from './room/room.component';
import { ThingComponent } from './thing/thing.component';
import { ItemComponent } from './item/item.component';
import { ClientComponent } from './client/client.component';
import { ReportComponent } from './report/report.component';
import { ContractConditionsComponent } from './contract-conditions/contract-conditions.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';




const routes: Routes = [
            { path: 'tutor-dashboard', component: MainLayoutComponent, children: [
                { path: '', component: TutorDashboardComponent },
                { path: 'apartment/:id', component: ApartmentComponent },
                { path: 'room/:id', component: RoomComponent },
                { path: 'thing/:id', component: ThingComponent },
                { path: 'item/:id', component: ItemComponent },
                { path: 'register-client', component: ClientComponent },
                { path: 'event-report', component: ReportComponent },
                { path: 'contract-conditions', component: ContractConditionsComponent },
                { path: 'wip/:id', component: WorkInProgressComponent}
        ]},
    ];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [
      RouterModule
  ]

})
export class TutorDashboardRoutingModule { }
