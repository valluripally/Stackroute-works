import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    loginUser(email: string, password: string ) {
        return this.http.post<any>('http://localhost:8070/user/login', {email: email, password: password, role: 'user'})
            // this is just the HTTP call,
            // we still need to handle the reception of the token
            // .shareReplay();
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }
    loginPartner(email: string, password: string, role: string) {
        return this.http.post<any>('http://localhost:8070/user/login', {email: email, password: password, role: role})
            // this is just the HTTP call,
            // we still need to handle the reception of the token
            // .shareReplay();
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
