import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
public movieList = [];
@ Input() movieNa;
url;
  constructor(private movieDetails: CardService) { }

  ngOnInit() {

  this.movieDetails.getWhishList().subscribe(fullList => this.movieList = fullList);
  console.log(this.movieList);
  }

}
