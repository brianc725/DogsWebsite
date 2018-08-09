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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBreeds().subscribe(
      data => this.breedslist = data
    );
  }
}
