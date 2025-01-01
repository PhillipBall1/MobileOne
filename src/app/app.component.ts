import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing functionality
import { NavbarComponent } from './shared/navbar/navbar.component'; // Import your Navbar component

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>  <!-- Insert the Navbar component here -->
    <router-outlet></router-outlet>  <!-- The router outlet for rendered components -->
  `,
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {
  title(title: any)
  {
    throw new Error('Method not implemented.');
  }
}
