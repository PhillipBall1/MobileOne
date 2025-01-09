import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers-registration-provider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './careers-registration-provider.component.html',
  styleUrl: './careers-registration-provider.component.css'
})
export class CareersRegistrationProviderComponent {
loading: boolean = false;

  selectedJob: any = null;

  constructor(private router: Router, private backendService: BackendService) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedJob = navigation?.extras.state?.['job'];
  }

  formData: any = {
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    npLicenseNumber: '',
    stateLicense: '',
    boardCertification: '',
    yearsOfExperience: 0,
    otherCertifications: '',
    employer: '',
    positionTitle: '',
    positionLocation: '',
    responsibilities: '',
    skills: '',
    startDate: '',
    partTime: false,
    fullTime: false,
    eitherTime: false,
    prefWorkHours: '',
    travelComfortable: '',
    technologyComfortable: '',
    systemsExperience: '',
    references: [
      {
        name: '',
        relationship: '',
        phone: '',
        email: '',
      },
      {
        name: '',
        relationship: '',
        phone: '',
        email: '',
      },
      {
        name: '',
        relationship: '',
        phone: '',
        email: '',
      },
    ],
    signature: '',
    date: '',
  };


  onSubmit(form: any) {
    if (form.valid) {
      this.loading = true;
      this.backendService.submitApplication('applicants@mobileonedocs.com', this.formData).subscribe(
        (response) => {
          console.log('Application submitted successfully:', response);
          this.loading = false;
          this.router.navigate(['/submitted'], { queryParams: { success: 'true' } });
        },
        (error) => {
          console.error('Error submitting application:', error);
          this.loading = false;
          this.router.navigate(['/submitted'], { queryParams: { success: 'false' } });
        }
      );
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
