import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/features/home-component/home/home.component';
import { ServicesComponent } from './app/features/services-component/services/services.component';
import { LocationsComponent } from './app/features/locations-component/locations/locations.component';
import { CareersComponent } from './app/features/careers/careers.component';
import { LoginComponent } from './app/features/login/login.component';
import { PrivacyPolicyComponent } from './app/features/footer-component/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './app/features/footer-component/terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './app/features/footer-component/contact-us/contact-us.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'contact', component: ContactUsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
