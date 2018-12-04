import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantsService } from '../app.constants';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {
    baseUrl = this.constants.baseUrl;
    constructor(
        public http: Http,
        public constants: ConstantsService
    ) {

    }

    login(data) {
        return this.http.post(`${this.baseUrl}login`, data).pipe(
            map(res => res.json())
        )
    }

    register(data) {
        return this.http.post(`${this.baseUrl}register`, data).pipe(
            map(res => res.json())
        )
    }

    isLoggedIn() {
        if (localStorage.getItem('user')) {
            return true;
        } else {
            false
        }
    }

}