import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeesComponent } from './createemployees.component';

describe('CreateemployeesComponent', () => {
  let component: CreateemployeesComponent;
  let fixture: ComponentFixture<CreateemployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateemployeesComponent]
    });
    fixture = TestBed.createComponent(CreateemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
