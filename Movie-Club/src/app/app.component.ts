import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Club';
  movieNa;
  onSearch(name) {
    this.movieNa =  name;
  }
}
