import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerSupplierCompanyRequestFormComponent} from './request-form/customer-supplier-company-request-form/customer-supplier-company-request-form.component';
import {DeliveryPickupPointPickerComponent} from './map-point-picker/delivery-pickup-point-picker/delivery-pickup-point-picker.component';

// angular-maps
import {AgmCoreModule} from 'angular2-google-maps/core';
import { CustomHttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerSupplierCompanyRequestFormComponent,
    DeliveryPickupPointPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx-fMQuBQX7_XProdLqoTwkK5JbhhgBkU'
    }),
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CustomHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
