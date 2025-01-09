import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.css'
})
export class ServicesViewComponent {
  service: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.service = navigation?.extras.state?.['card'];
  }
}
