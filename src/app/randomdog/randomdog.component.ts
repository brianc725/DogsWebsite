import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

interface Random {
  status: string;
  message: string;
}

@Component({
  selector: 'app-randomdog',
  templateUrl: './randomdog.component.html',
  styleUrls: ['./randomdog.component.scss']
})
export class RandomdogComponent implements OnInit {

  Image: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRandom().subscribe(
      data => this.Image = data //gets the Image object from the Dog API
    );
  }

}
