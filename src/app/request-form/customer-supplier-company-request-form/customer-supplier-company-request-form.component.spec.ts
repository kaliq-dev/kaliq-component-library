import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupplierCompanyRequestFormComponent } from './customer-supplier-company-request-form.component';

describe('CustomerSupplierCompanyRequestFormComponent', () => {
  let component: CustomerSupplierCompanyRequestFormComponent;
  let fixture: ComponentFixture<CustomerSupplierCompanyRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSupplierCompanyRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupplierCompanyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
