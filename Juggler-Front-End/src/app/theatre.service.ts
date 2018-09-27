import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from './theatre';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {
 // private _url: string = "http://172.23.238.222:8094/api/v1/";
  private _url = 'http://localhost:8020';
  constructor(private http: HttpClient) {}

  saveTheatre(theatre: Theatre): Observable<Theatre> {
  //  return this.http.post<Theatre>(this._url+"registerTheatre", theatre);
   return this.http.post<Theatre>(this._url + '/api/v1/theatre', theatre);
  }
}
