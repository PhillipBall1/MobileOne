import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/features/home/home.component';
import { ServicesComponent } from './app/features/services/services.component';
import { LocationsComponent } from './app/features/locations/locations.component';
import { CareersComponent } from './app/features/careers/careers.component';
import { LoginComponent } from './app/features/login/login.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'login', component: LoginComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
