import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { ApartmentDropdownComponent } from './menu/apartment-dropdown/apartment-dropdown.component';
import { RoomDropdownComponent } from './menu/apartment-dropdown/room-dropdown/room-dropdown.component';
import { ThingDropdownComponent } from './menu/thing-dropdown/thing-dropdown.component';
import { ItemDropdownComponent } from './menu/item-dropdown/item-dropdown.component';


@NgModule({
    declarations: [
        MainLayoutComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        ApartmentDropdownComponent,
        RoomDropdownComponent,
        ThingDropdownComponent,
        ItemDropdownComponent

    ],

    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AngularFontAwesomeModule
    ],

})
export class LayoutModule { }
