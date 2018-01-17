import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // const authHeader = this.auth.getAuthorizationHeader();
    let header = null;
    header = req.headers.append('Cache-Control', 'no-cache');
    let authResponse = localStorage.getItem('AuthResponse');
    if(authResponse) {
        let token = JSON.parse(authResponse).Token;
        header = header.set('Token', token);
    }
    // Clone the request to add the new header.
    console.log(req.headers);
    const authReq = req.clone({headers: header});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
