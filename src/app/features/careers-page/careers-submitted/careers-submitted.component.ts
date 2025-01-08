import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './careers-submitted.component.html',
  styleUrl: './careers-submitted.component.css',
  selector: 'app-careers-submitted',
  standalone: true,
  imports: [CommonModule],

})
export class CareersSubmittedComponent implements OnInit {
  success: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.success = params['success'] === 'true';
    });

  }
}
