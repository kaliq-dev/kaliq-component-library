import {Injectable} from '@angular/core';
import {CustomHttpService} from '../http.service';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';
import {Marker} from './marker';

@Injectable()
export class MarkerService {
  constructor(private http: CustomHttpService) {
  }


  getGeoLocationName(data: Marker) {
    let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + data.lat + "," + data.lng;
    return this.http.get(url).map((res) => res.json());
  }

}
