import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersRegistrationComponent } from './careers-registration.component';

describe('CareersRegistrationComponent', () => {
  let component: CareersRegistrationComponent;
  let fixture: ComponentFixture<CareersRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
