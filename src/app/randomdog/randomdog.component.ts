import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-randomdog',
  templateUrl: './randomdog.component.html',
  styleUrls: ['./randomdog.component.scss']
})

export class RandomdogComponent implements OnInit {

  Image: Object;
  Breed: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getRandomData();
  }

  getRandomData() {
    this.data.getRandom().subscribe(
      (data) => {
            this.Image = data; //gets the Image object from the Dog API

            var parser = document.createElement('a'); //used to grab the path name where the breed is
            parser.href = data['message'];
            var pathname = parser.pathname; 
            var split = pathname.split('/');
            this.Breed = split[2]; //the breed name is in the second part of the path
          }
    );
  }

}
