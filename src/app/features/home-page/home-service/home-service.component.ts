import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../../directives/fade-in.directive';
import { SharedService } from '../../../shared/services/shared-service.service';

@Component({
  selector: 'app-home-service',
  standalone: true,
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css'],
  imports: [CommonModule, FadeInDirective],
})
export class HomeServiceComponent implements AfterViewInit{

  cards: { header: string; description: string }[] = [];

  constructor(private sharedService: SharedService) {
    this.cards = this.sharedService.services;
  }

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;

    const scrollSpeed = 0.5;
    let currentTransform = 0;

    const scrollCarousel = () => {
      currentTransform -= scrollSpeed;
      track.style.transform = `translateX(${currentTransform}px)`;

      const firstCard = track.firstElementChild as HTMLElement;
      const firstCardRect = firstCard.getBoundingClientRect();

      if (firstCardRect.right <= 0) {
        track.style.transition = 'none';
        currentTransform += firstCard.offsetWidth * 1.17;
        track.appendChild(firstCard);
        track.style.transform = `translateX(${currentTransform}px)`;
        track.offsetHeight;
        track.style.transition = '';
      }

      requestAnimationFrame(scrollCarousel);
    };

    requestAnimationFrame(scrollCarousel);
  }
}
