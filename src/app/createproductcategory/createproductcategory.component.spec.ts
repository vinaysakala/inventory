import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductcategoryComponent } from './createproductcategory.component';

describe('CreateproductcategoryComponent', () => {
  let component: CreateproductcategoryComponent;
  let fixture: ComponentFixture<CreateproductcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateproductcategoryComponent]
    });
    fixture = TestBed.createComponent(CreateproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
