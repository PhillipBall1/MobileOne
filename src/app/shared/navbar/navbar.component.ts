import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // For routing links
import { CommonModule } from '@angular/common'; // Angular common functionality

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterLink],
})
export class NavbarComponent {}
