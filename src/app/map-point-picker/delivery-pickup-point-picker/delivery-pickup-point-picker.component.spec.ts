import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPickupPointPickerComponent } from './delivery-pickup-point-picker.component';

describe('DeliveryPickupPointPickerComponent', () => {
  let component: DeliveryPickupPointPickerComponent;
  let fixture: ComponentFixture<DeliveryPickupPointPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPickupPointPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPickupPointPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
