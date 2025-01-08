import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './careers-listing.component.html',
  styleUrl: './careers-listing.component.css',
})
export class CareersListingComponent {
  jobs: {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
    provider: boolean;
  }[] = [];

  constructor(private sharedService: SharedService) {
    this.jobs = this.sharedService.jobs;
  }

  selectedJob: any = null;

  toggleJobDetails(job: any): void {
    this.selectedJob = this.selectedJob === job ? null : job;
  }
}
