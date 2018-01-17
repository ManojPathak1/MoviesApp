import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User }  from './models/User';
import { catchError, map, tap } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    // One way using observable.
    /* getUsers(): Observable<User[]> {
        let url = "https://jsonplaceholder.typicode.com/posts";
        return this.http.get<User[]>(url)
            .pipe(
                map(users => {
                    if(users) {
                        console.log(users);
                        return users;
                        // catchError(this.handleError('getHeroes', [{error: true, errorMessage: "Data is there."}]));
                    }
                    else {
                        // catchError(this.handleError('getHeroes', [{error: true, errorMessage: "Data is null."}]));
                    }
                }),
                catchError(this.handleError('getHeroes', []))
            );
    } */

    // Second way using map.
    getUsers(): any {
        let url = "https://jsonplaceholder.typicode.com/posts";
        return this.http.get(url)
            .map(users => 1)
            .catch(error => Observable.of(error));
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
/* private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    // return of(result as T);
  };
} */

    auth(): any {
        let url = "";
        let headersObj = {
            headers: new HttpHeaders().set('Authorization', 'auth-token')
        }
        return this.http.get(url, headersObj)
            .map(res => {
                return res;
            })
            .catch(error => {
                return Observable.of(error);
            });
    }
}
