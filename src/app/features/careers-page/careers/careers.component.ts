import { Component } from '@angular/core';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { CareersListingComponent } from '../careers-listing/careers-listing.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [FadeInDirective, CareersListingComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
