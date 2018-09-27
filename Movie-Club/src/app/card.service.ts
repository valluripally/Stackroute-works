import { Injectable, Input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'http://localhost:8080/api/v1/movies';
  private url2 = 'http://localhost:8080/api/v1/movie';
  private url3 = 'http://localhost:8080/api/v1/movie';
  // private  url = 'http://www.omdbapi.com/?s=+"this.movieNa"+&apikey=12dba97a';
  // private  url = '/assets/data/detail.json';

  constructor(private http: HttpClient) {}

  getWhishList(): Observable<MovieDetails[]> {
    return this.http.get<MovieDetails[]>(this.url);
  }
  deleteWishList(id) {
console.log(this.url2 + '/' + id);
    return this.http.delete(this.url2 + '/' + id).pipe(
      map((response1: Response) => {
        return response1.json();
      })
    );
  }
  addToWishList(movieSelected) {

    return this.http.post(this.url3, movieSelected).pipe(
      map((response2: Response) => {
        return response2.json();
      })
    );
  }
  getMovieById(id) {
    return this.http.get(this.url2 + '/' + id).pipe(
      map((response1: Response) => {
        return response1.json();
      })
    );
  }
}
