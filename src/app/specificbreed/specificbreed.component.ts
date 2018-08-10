import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { ActivatedRoute, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-specificbreed',
  templateUrl: './specificbreed.component.html',
  styleUrls: ['./specificbreed.component.scss']
})
export class SpecificbreedComponent implements OnInit {

  Image: Object;
  Breed: string;

  constructor(private route: ActivatedRoute,
    private data: DataService, private location: Location) { }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    var tempBreed = this.route.snapshot.paramMap.get('breed');

    this.data.getDetailed(tempBreed).subscribe(
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

  goBack(): void {
    this.location.back();
  }

}
