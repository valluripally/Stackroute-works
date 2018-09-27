import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 // public movieList = [];
  constructor() { }

  ngOnInit() {
   // this.movieDetails.getWhishList().subscribe(fullList => this.movieList = fullList);
  }

}
