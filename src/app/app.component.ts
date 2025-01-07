import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './features/home-component/home/home.component';
import { HomeInfoComponent } from './features/home-component/home-info/home-info.component';
import { HomeServiceComponent } from './features/home-component/home-service/home-service.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrivacyPolicyComponent } from './features/footer-component/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './features/footer-component/terms-conditions/terms-conditions.component';
import { LocationsMapComponent } from './features/locations-component/locations-map/locations-map.component';
import { LocationsComponent } from './features/locations-component/locations/locations.component';

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
    HomeInfoComponent
  ],
})
export class AppComponent {
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
