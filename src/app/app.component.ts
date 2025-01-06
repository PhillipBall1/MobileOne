import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { HomeInfoComponent } from './features/home-info/home-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    HomeInfoComponent
  ],
})
export class AppComponent {
  title(title: any)
  {
    throw new Error('Method not implemented.');
  }
}
