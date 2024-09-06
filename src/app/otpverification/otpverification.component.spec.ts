import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpverificationComponent } from './otpverification.component';

describe('OtpverificationComponent', () => {
  let component: OtpverificationComponent;
  let fixture: ComponentFixture<OtpverificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpverificationComponent]
    });
    fixture = TestBed.createComponent(OtpverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
