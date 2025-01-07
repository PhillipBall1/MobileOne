import { CommonModule } from '@angular/common';
import { AfterViewInit, Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-home-info',
  standalone: true,
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css',
  imports: [CommonModule, RouterLink, FadeInDirective],
})
export class HomeInfoComponent{
  hasRouterLink = true;
}
