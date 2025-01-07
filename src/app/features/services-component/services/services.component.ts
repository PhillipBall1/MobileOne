import { Component } from '@angular/core';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { ServicesDisplayComponent } from '../services-display/services-display.component';
import { ServicesInsuranceComponent } from '../services-insurance/services-insurance.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FadeInDirective, ServicesDisplayComponent, ServicesInsuranceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
}
