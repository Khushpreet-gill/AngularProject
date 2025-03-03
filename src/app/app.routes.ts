import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionComponent } from './collection/collection.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';


export const routes: Routes = [
  // { path: '', redirectTo: 'user-login', pathMatch:'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: DashboardComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'help-desk', component: HelpDeskComponent },
];

