import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breedslist',
  templateUrl: './breedslist.component.html',
  styleUrls: ['./breedslist.component.scss']
})
export class BreedslistComponent implements OnInit {

  breedslist: Object;
  breeds: Array<Object> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getListData();
  }

  getListData() {
    this.data.getBreeds().subscribe(
      (data) => {
        this.breedslist = data['message'];
        Object.keys(this.breedslist).map(
          (key) => {
             this.breeds.push(key); // convert the object into an array
          }
        )
      });
  }
}
