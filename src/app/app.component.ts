import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './features/home-page/home/home.component';
import { HomeInfoComponent } from './features/home-page/home-info/home-info.component';
import { HomeServiceComponent } from './features/home-page/home-service/home-service.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrivacyPolicyComponent } from './features/footer-component/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './features/footer-component/terms-conditions/terms-conditions.component';
import { LocationsMapComponent } from './features/locations-page/locations-map/locations-map.component';
import { LocationsComponent } from './features/locations-page/locations/locations.component';
import { CareersComponent } from './features/careers-page/careers/careers.component';
import { CareersListingComponent } from './features/careers-page/careers-listing/careers-listing.component';
import { CareersRegistrationComponent } from './features/careers-page/careers-registration/careers-registration.component';
import { CareersRegistrationProviderComponent } from './features/careers-page/careers-registration-provider/careers-registration-provider.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesViewComponent } from './features/services-page/services-view/services-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LocationsComponent,
    LocationsMapComponent,
    HomeServiceComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    CareersComponent,
    CareersListingComponent,
    CareersRegistrationComponent,
    CareersRegistrationProviderComponent,
    ServicesViewComponent,
    HttpClientModule ,
    HomeInfoComponent
  ],
})
export class AppComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  title(title: any)
  {
    throw new Error('Method not implemented.');
  }

  fadeElementIn(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.fade-in-text');
    elements.forEach((element) => observer.observe(element));
  }
}
