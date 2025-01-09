import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { SharedService } from '../../../shared/services/shared-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-display',
  standalone: true,
  imports: [FadeInDirective, CommonModule, RouterLink],
  templateUrl: './services-display.component.html',
  styleUrl: './services-display.component.css'
})
export class ServicesDisplayComponent {

  cards: { header: string; description: string }[] = [];

    constructor(private sharedService: SharedService) {
      this.cards = this.sharedService.services;
    }

}
