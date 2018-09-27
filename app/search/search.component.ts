import { Component, OnInit } from '@angular/core';

  import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies = [];
  constructor(private searchService: SearchService) {}  ngOnInit() {
  }getMovie(title: string) {
  this.searchService.getMovies(title)
  .then(re => this.movies = re.Search);
  }
}
