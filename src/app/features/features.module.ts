import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '../materials/materials.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { MenuItemsComponent } from './menu-items/menu-items.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    MenuItemsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MenuItemsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  providers: []
})
export class FeaturesModule { }
