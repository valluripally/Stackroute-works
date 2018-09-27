import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../card.service';
import { MovieDetails } from '../movie';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movieTitle;
   @Input () movieLists;
   deleteList;
   addedList;
   newMovie;
   movieObject = {
    'movieId' : 13,
    'movieTitle': 'wall-e',
  'movieRating': 5,
  'releaseYear': 2010
   };
   movieObject1 = {
    'movieId' : 21,
    'movieTitle': 'ser-e',
  'movieRating': 5,
  'releaseYear': 2010
   };
  constructor(private movieDetails: CardService ) { }
  set MovieName(movie) {
    this.movieTitle = movie; }
  get MovieName() {
    return this.movieTitle;
   }
  ngOnInit() {
  }
  onWorking(id) {
    this.movieDetails.deleteWishList(id).subscribe(data => this.deleteList = data);
    console.log(this. deleteList);
  return this. deleteList;
    }

    onAdd(movieObject) {
      this.movieDetails.addToWishList(movieObject).subscribe(data => this.addedList = data);
      return this.addedList;
    }
    // onGetOneMovie(id) {
    //   this.movieDetails.getMovieById(id).subscribe(data => this.newMovie = data);
    //   this.movieDetails.addToWishList(this.newMovie).subscribe(data => this.addedList = data);
    //   return this.addedList;
    // }
  }
