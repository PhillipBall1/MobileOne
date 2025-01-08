import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/features/home-page/home/home.component';
import { ServicesComponent } from './app/features/services-page/services/services.component';
import { LocationsComponent } from './app/features/locations-page/locations/locations.component';
import { CareersComponent } from './app/features/careers-page/careers/careers.component';
import { LoginComponent } from './app/features/login/login.component';
import { PrivacyPolicyComponent } from './app/features/footer-component/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './app/features/footer-component/terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './app/features/footer-component/contact-us/contact-us.component';
import { CareersRegistrationComponent } from './app/features/careers-page/careers-registration/careers-registration.component';
import { CareersRegistrationProviderComponent } from './app/features/careers-page/careers-registration-provider/careers-registration-provider.component';
import { provideHttpClient } from '@angular/common/http';
import { CareersSubmittedComponent } from './app/features/careers-page/careers-submitted/careers-submitted.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'apply', component: CareersRegistrationComponent },
  { path: 'apply-provider', component: CareersRegistrationProviderComponent },
  { path: 'submitted', component: CareersSubmittedComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
