import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeInfoComponent } from '../home-info/home-info.component';
import { HomeServiceComponent } from '../home-service/home-service.component';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink, HomeInfoComponent, HomeServiceComponent, FadeInDirective],
})
export class HomeComponent {
}

