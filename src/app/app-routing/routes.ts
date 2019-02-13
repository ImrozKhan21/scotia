import {Routes} from '@angular/router';

import {HomeComponent} from '../features/home/home.component';
import {ContactComponent} from '../features/contact/contact.component';
import {MenuItemsComponent} from '../features/menu-items/menu-items.component';
import {AboutComponent} from '../features/about/about.component';

export const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'menu-items', component: MenuItemsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
