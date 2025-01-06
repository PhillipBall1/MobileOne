import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-info',
  standalone: true,
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css',
  imports: [CommonModule, RouterLink],
})
export class HomeInfoComponent  implements AfterViewInit {

  hasRouterLink: boolean = true;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the fade-in class when the element is in view
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    const elements = document.querySelectorAll('.fade-in-text');
    elements.forEach(element => observer.observe(element));
  }
}
