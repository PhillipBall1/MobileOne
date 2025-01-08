import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDisplayComponent } from './services-display.component';

describe('ServicesDisplayComponent', () => {
  let component: ServicesDisplayComponent;
  let fixture: ComponentFixture<ServicesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
