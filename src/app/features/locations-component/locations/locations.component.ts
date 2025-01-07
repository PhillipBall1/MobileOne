import { Component } from '@angular/core';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { LocationsMapComponent } from '../locations-map/locations-map.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [FadeInDirective, LocationsMapComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

}
