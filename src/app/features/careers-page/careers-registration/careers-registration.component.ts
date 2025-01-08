import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BackendService } from '../../../services/backend.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-careers-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './careers-registration.component.html',
  styleUrl: './careers-registration.component.css'
})
export class CareersRegistrationComponent {
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
    authorized: '',
    education: '',
    institution: '',
    fieldOfStudy: '',
    employer: '',
    positionTitle: '',
    reasonForLeaving: '',
    responsibilities: '',
    skills: '',
    software: '',
    references: [{}, {}, {}],
    signature: '',
    date: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      this.loading = true;
      this.backendService.submitApplication('pball1346@gmail.com', this.formData).subscribe(
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
