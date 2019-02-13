import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '../materials/materials.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
  ContainerComponent],
  providers: [],
})
export class CoreModule { }
