import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // const authHeader = this.auth.getAuthorizationHeader();
    console.log(req);
    let header = null;
    let weatherApiKey = "f89a50b055bb3e5a42333e331e717094";
    let newsApiKey = "1272e100399c44bfbe91b64998809de0";
    let len = req.url.length;
    let isExternalApi = len>32?(req.url.substr(len-32)===weatherApiKey || req.url.substr(len-32)===newsApiKey): false;
    if(!isExternalApi) {
        header = req.headers.append('Cache-Control', 'no-cache');
        // header.append('Access-Control-Allow-Origin', '*');
        // header = header.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
        // header = header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // header = header.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
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
