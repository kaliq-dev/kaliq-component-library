import {Component, OnInit} from '@angular/core';
import {Marker} from '../marker';
import {MarkerService} from '../marker.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-delivery-pickup-point-picker',
  templateUrl: './delivery-pickup-point-picker.component.html',
  styleUrls: ['./delivery-pickup-point-picker.component.css'],
  providers: [
    MarkerService
  ]
})
export class DeliveryPickupPointPickerComponent implements OnInit {

  title: string = 'Delivery Pickup Points Picker';
  lat: number = 23.5859;
  lng: number = 58.4059;
  zoom: number = 8;

  public markerList: Marker[] = [];
  public showPos = false;

  constructor(private markerService: MarkerService) {
  }

  ngOnInit() {
    this.markerList.push({lat: this.lat, lng: this.lng});
  }

  //get map point onclick map
  getMapPoint(event: any) {
    this.markerList.push({lat: event.coords.lat, lng: event.coords.lng});
  }

  //remove a marker on click
  removeMarker(index) {
    this.markerList.splice(index, 1);
  }

  saveMarkerPoints() {
    this.showPos = true;
    this.markerList.map((element, index, array) => {
      this.markerService.getGeoLocationName(element)
        .subscribe(
          (res) => {
            if (res['status'] === 'OK') {
              this.markerList[index]['geolocation'] = res['results'];
            }
          }
        )
    });

    console.log(this.markerList);
  }
}
