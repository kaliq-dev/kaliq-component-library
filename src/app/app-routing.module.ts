import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerSupplierCompanyRequestFormComponent} from './request-form/customer-supplier-company-request-form/customer-supplier-company-request-form.component';
import {DeliveryPickupPointPickerComponent} from './map-point-picker/delivery-pickup-point-picker/delivery-pickup-point-picker.component';

const routes: Routes = [
  {
    path: 'request/company/:slug',
    component: CustomerSupplierCompanyRequestFormComponent
  },
  {
    path: 'delivery-pickup-points-picker',
    component: DeliveryPickupPointPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
