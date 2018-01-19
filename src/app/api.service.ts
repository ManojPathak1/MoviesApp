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
import { HttpParams } from '@angular/common/http';

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

    auth(emailId, password): any {
        // let base64 = Base64();
        let authToken = "Basic "+btoa(emailId+':'+password);
        let url = "http://test.qorql.com/firebase/auth";
        let headersObj = {
            headers: new HttpHeaders().set('Authorization', authToken)
        }
        return this.http.get(url, headersObj)
            .map(res => {
                return res;
            })
            .catch(error => {
                return Observable.of(error);
            });
    }

    fetchTemplateNames(doctorId): any {
        // let base64 = Base64();
        let url = 'http://test.qorql.com/firebase/v2/eprescription/templates/names';
        return this.http.post(url, null, {
            params: new HttpParams().set('doctor', doctorId),
        })
            .map(res => {
                console.log(res);
                return res;
            })
            .catch(error => {
                return Observable.of(error);
            });
    }

    fetchNews(): any {
        // let base64 = Base64();
        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1272e100399c44bfbe91b64998809de0';
        return this.http.get(url)
            .map(res => {
                console.log(res);
                return res;
            })
            .catch(error => {
                return Observable.of(error);
            });
    }

    getWeather(lat, lon): any {
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bbe7327d5a45716dc5fbab635e6d1f06`;
        return this.http.get(url)
            .map(res => {
                console.log(res);
                return res;
            })
            .catch(error => {
                return Observable.of(error);
            });
    }
}
