import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  services = [
    { header: 'Primary Care', description: 'Comprehensive healthcare services focused on prevention, diagnosis, and treatment of common illnesses.' },
    { header: 'COVID-19', description: 'Specialized care and services tailored to prevent, manage, and treat COVID-19 cases.' },
    { header: 'Weight Management', description: 'Support and guidance for achieving and maintaining a healthy weight through personalized plans.' },
    { header: 'Transitional Care', description: 'Ensuring smooth transitions from hospital to home or other care settings with continuous support.' },
    { header: 'Palliative Care', description: 'Focused on providing relief from the symptoms and suffering associated with serious illnesses.' },
    { header: 'Wound Care', description: 'Specialized treatment and care aimed at promoting healing and preventing infection in wounds.' },
    { header: 'Physical / Speech / Occupational Therapy', description: 'Therapeutic services designed to improve physical abilities, communication, and daily living skills.' },
    { header: 'Chronic Care', description: 'Long-term care designed to manage and treat chronic conditions such as diabetes and heart disease.' },
    { header: 'Senior Placement', description: 'Helping seniors find suitable care facilities that meet their health and lifestyle needs.' },
  ];
  insurance = [
    { name: 'aetna', image: 'assets/images/insurance/Aetna.png'},
    { name: 'AZCareNetwork', image: 'assets/images/insurance/AZCareNetwork.png'},
    { name: 'AZCompleteCare', image: 'assets/images/insurance/AZCompleteCare.png'},
    { name: 'Banner Health', image: 'assets/images/insurance/banner-university-family.jpg'},
    { name: 'BlueCrossBlueShield', image: 'assets/images/insurance/BlueCrossBlueShield.png'},
    { name: 'Cigna', image: 'assets/images/insurance/Cigna.jpg'},
    { name: 'DevotedHealth', image: 'assets/images/insurance/DevotedHealth.png'},
    { name: 'Humana', image: 'assets/images/insurance/Humana.jpg'},
    { name: 'ImperialHealthHoldings', image: 'assets/images/insurance/ImperialHealthHoldings.jpg'},
    { name: 'Medicaid', image: 'assets/images/insurance/Medicaid.jpg'},
    { name: 'Medicare', image: 'assets/images/insurance/Medicare.jpg'},
    { name: 'MercyCare', image: 'assets/images/insurance/MercyCare.png'},
    { name: 'PNOA', image: 'assets/images/insurance/PNOA.jpg'},
    { name: 'Tricare', image: 'assets/images/insurance/Tricare.jpg'},
    { name: 'UnitedHealthCare', image: 'assets/images/insurance/UnitedHealthCare.jpg'},
    { name: 'WellCare', image: 'assets/images/insurance/WellCare.jpg'},
  ];
  cities = [
    { name: 'Mesa', coords: { lat: 33.4152, lng: -111.8315 } },
    { name: 'Chandler', coords: { lat: 33.3062, lng: -111.8413 } },
    { name: 'Florence', coords: { lat: 33.0359, lng: -111.3873 } },
    { name: 'Scottsdale', coords: { lat: 33.4942, lng: -111.9261 } },
    { name: 'Apache Junction', coords: { lat: 33.4151, lng: -111.5496 } },
    { name: 'Gilbert', coords: { lat: 33.3528, lng: -111.7890 } },
    { name: 'Phoenix', coords: { lat: 33.4484, lng: -112.0740 } },
    { name: 'Bullhead City', coords: { lat: 35.1359, lng: -114.5286 } },
    { name: 'Tempe', coords: { lat: 33.4255, lng: -111.9400 } },
    { name: 'San Tan Valley', coords: { lat: 33.1911, lng: -111.5280 } },
    { name: 'Queen Creek', coords: { lat: 33.2486, lng: -111.6343 } },
    { name: 'Maricopa', coords: { lat: 33.0581, lng: -112.0476 } },
    { name: 'Tucson', coords: { lat: 32.2226, lng: -110.9747 } },
    { name: 'Casa Grande', coords: { lat: 32.8795, lng: -111.7574 } },
    { name: 'Arizona City', coords: { lat: 32.7559, lng: -111.6709 } },
    { name: 'Las Vegas', coords: { lat: 36.1699, lng: -115.1398 } },
    { name: 'Henderson', coords: { lat: 36.0395, lng: -114.9817 } },
    { name: 'North Las Vegas', coords: { lat: 36.1989, lng: -115.1175 } },
    { name: 'Reno', coords: { lat: 39.5296, lng: -119.8138 } },
    { name: 'Sparks', coords: { lat: 39.5349, lng: -119.7527 } },
    { name: 'Carson City', coords: { lat: 39.1638, lng: -119.7674 } },
    { name: 'Lemon Valley', coords: { lat: 39.6241, lng: -119.7812 } },
    { name: 'Cold Springs', coords: { lat: 39.7040, lng: -119.9800 } },
    { name: 'Sted', coords: { lat: 39.5910, lng: -119.7310 } },
  ];
  jobs = [
    { id: 1, title: 'Receptionist', location: 'Remote', type: 'Full-time',
      description: 'This is the job descriptiion',
      provider: false,
    },
    { id: 2, title: 'Medical Assistant coordinator', location: 'AZ / NV', type: 'Part-time',
      description: '',
      provider: true,
     },
  ];
}
