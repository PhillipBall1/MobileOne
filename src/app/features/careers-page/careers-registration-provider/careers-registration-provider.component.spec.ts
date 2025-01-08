import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersRegistrationProviderComponent } from './careers-registration-provider.component';

describe('CareersRegistrationProviderComponent', () => {
  let component: CareersRegistrationProviderComponent;
  let fixture: ComponentFixture<CareersRegistrationProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersRegistrationProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersRegistrationProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
