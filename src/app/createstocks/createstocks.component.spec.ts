import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestocksComponent } from './createstocks.component';

describe('CreatestocksComponent', () => {
  let component: CreatestocksComponent;
  let fixture: ComponentFixture<CreatestocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatestocksComponent]
    });
    fixture = TestBed.createComponent(CreatestocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
