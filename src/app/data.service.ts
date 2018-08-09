import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get('https://dog.ceo/api/breeds/list/all')
  }

  getRandom() {
    return this.http.get('https://dog.ceo/api/breeds/image/random')
  }
}
