import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        let user = JSON.parse(localStorage.getItem('user'));
        let token = localStorage.getItem('token')
        console.log(token, user, 'in interceptor');
        if (user && token) {
            console.log('iohioih')
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('req', request)
        }

        return next.handle(request);
    }
}