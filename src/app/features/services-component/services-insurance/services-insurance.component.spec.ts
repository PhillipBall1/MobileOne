import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesInsuranceComponent } from './services-insurance.component';

describe('ServicesInsuranceComponent', () => {
  let component: ServicesInsuranceComponent;
  let fixture: ComponentFixture<ServicesInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
