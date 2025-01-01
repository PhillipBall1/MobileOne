import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Angular common functionality
import { RouterLink } from '@angular/router';  // For routing links

@Component({
  selector: 'app-home',
  standalone: true,  // Mark as standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink],  // Import necessary modules for routing
})
export class HomeComponent {}

