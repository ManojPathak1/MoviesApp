import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // const authHeader = this.auth.getAuthorizationHeader();
    console.log(req.url);
    let header = null;
    if(req.url!=="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1272e100399c44bfbe91b64998809de0") {
        header = req.headers.append('Cache-Control', 'no-cache');
        let authResponse = localStorage.getItem('AuthResponse');
        if(authResponse) {
            let token = JSON.parse(authResponse).Token;
            header = header.set('Token', token);
        }
    }
    // Clone the request to add the new header.
    console.log(req.headers);
    const authReq = req.clone({headers: header});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
