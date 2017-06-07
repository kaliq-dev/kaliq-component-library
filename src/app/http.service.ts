import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CustomHttpService {

  constructor(private http: Http) { }

  get(url: string) {
    const headers = new Headers();
    return this.http.get(url, {headers: headers});
  }

}
