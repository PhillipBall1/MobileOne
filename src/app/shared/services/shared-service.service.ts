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
     {
      id: 1,
      title: 'Scheduling Coordinator',
      location: 'Remote',
      type: 'Full-time',
      description: "As a Scheduling Coordinator, you will be responsible for coordinating home-based primary care appointments for our healthcare providers. This fully remote role requires strong communication skills, attention to detail, and experience with scheduling to ensure smooth patient care coordination.",
      responsibilities: [
        "Schedule and coordinate in-home primary care appointments for patients.",
        "Communicate with patients, families, and healthcare providers to confirm appointment details.",
        "Manage scheduling software and ensure accurate and timely scheduling of patient visits.",
        "Resolve scheduling conflicts, cancellations, and rescheduling as necessary.",
        "Collaborate with other departments and healthcare professionals to ensure smooth delivery of services."
      ],
      qualifications: [
        "Mandatory: Prior experience in scheduling is required.",
        "Experience with Electronic Health Records (EHRs) is strongly preferred.",
        "Strong organizational skills and the ability to manage multiple tasks simultaneously.",
        "Excellent verbal and written communication skills.",
        "Proficient in using scheduling software and maintaining accurate records.",
        "Empathetic, patient-focused mindset with the ability to handle sensitive information confidentially.",
        "Ability to work independently and manage time effectively in a fully remote environment.",
        "High school diploma or equivalent required; associate degree or higher in healthcare administration or related field preferred."
      ],
      benefits: [
        "Competitive salary.",
        "Flexible working hours.",
        "Paid time off and holidays.",
        "Opportunities for professional development and career growth.",
        "Comprehensive health benefits package."
      ],
      provider: false
    },
    {
      id: 2,
      title: 'Nurse Practitioner or Physician Assistant',
      location: 'East Valley Phoenix',
      type: 'Full-time',
      description: "Join Our Outstanding Home-Based Primary Care Team! Are you a Physician Assistant or Nurse Practitioner seeking an exciting hybrid role with the best of both worlds—telehealth and in-person visits? Look no further! Our well-established and thriving Home-Based Primary Care (HBPC) practice is searching for a dedicated NP or PA to join our exceptional team.",
      responsibilities: [
        "Deliver compassionate, comprehensive care to patients in their homes and virtually.",
        "Collaborate with a multidisciplinary team to ensure the highest quality care.",
        "Build lasting relationships with patients and families in a hybrid setting."
      ],
      qualifications: [
        "A licensed and experienced Nurse Practitioner or Physician Assistant with a passion for patient-centered care.",
        "Adaptable, tech-savvy, and excited about blending telehealth with in-person care.",
        "A team player who thrives in a positive and innovative environment."
      ],
      benefits: [
        "$15,000 Sign-On Bonus!",
        "Competitive reimbursement.",
        "Flexible schedule to support work-life balance.",
        "Growth-focused opportunities, with potential for shared success and leadership opportunities."
      ],
      provider: true
    },
    {
      id: 3,
      title: 'Medical Assistant/Receptionist',
      location: 'Remote',
      type: 'Full-time',
      description: "Join our well-established mobile primary care practice as a Medical Assistant/Receptionist and become part of our thriving remote team! If you're a dynamic multitasker with a passion for helping others, this opportunity is for you.",
      responsibilities: [
        "Be the friendly first voice our patients hear—outstanding customer service is a must!",
        "Triage calls expertly, ensuring patients are connected to the right care at the right time.",
        "Work with multiple platforms, including EHR systems, VOIP tools, and team collaboration software.",
        "Participate in daily remote group meetings to stay connected and aligned with our mission."
      ],
      qualifications: [
        "Medical Assistant experience with excellent organizational and multitasking skills.",
        "A tech-savvy problem solver who can seamlessly navigate EHR systems, VOIP platforms, and remote tools like Microsoft Teams or similar.",
        "A self-starter with fantastic communication skills who thrives in a remote work environment.",
        "A compassionate, patient-focused attitude with a drive to make every interaction a positive one."
      ],
      benefits: [
        "Work from home—say goodbye to commutes and hello to flexibility!",
        "Be part of a close-knit remote team that’s passionate about providing exceptional care.",
        "Join a practice that truly cares about its patients and team members."
      ],
      provider: false
    },
  ];
}
