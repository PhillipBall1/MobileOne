import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersListingComponent } from './careers-listing.component';

describe('CareersListingComponent', () => {
  let component: CareersListingComponent;
  let fixture: ComponentFixture<CareersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
