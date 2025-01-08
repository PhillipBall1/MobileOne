import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSubmittedComponent } from './careers-submitted.component';

describe('CareersSubmittedComponent', () => {
  let component: CareersSubmittedComponent;
  let fixture: ComponentFixture<CareersSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersSubmittedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
