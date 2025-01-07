import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { SharedService } from '../../../shared/services/shared-service.service';

@Component({
  selector: 'app-services-insurance',
  standalone: true,
  imports: [FadeInDirective, CommonModule],
  templateUrl: './services-insurance.component.html',
  styleUrl: './services-insurance.component.css'
})
export class ServicesInsuranceComponent {

  insurance: { name: string; image: string }[] = [];

  constructor(private sharedService: SharedService) {
    this.insurance = this.sharedService.insurance;
  }
}
