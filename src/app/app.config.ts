import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { UserLoginComponent } from './user-login/user-login.component';
// import { HomeComponent } from './pages/home/home.component';

// const routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: UserLoginComponent },
//   { path: 'home', component: HomeComponent }
// ];   // ys: repeated code, it's already in app.routes

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
