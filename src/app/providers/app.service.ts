import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../app.constants';
import { map } from 'rxjs/operators';
@Injectable()
export class AppService {
    baseUrl = this.constants.baseUrl;
    constructor(
        private constants: ConstantsService,
        public http: HttpClient,

    ) { }

    getCar() {

    }

    setCar(data) {
        return this.http.post(`${this.baseUrl}car`, data);
    }

    setOwner(data) {
        return this.http.post(`${this.baseUrl}owner`, data);

    }

    getOwner() {

    }

    getVehicles() {
        return this.http.get(`${this.baseUrl}vehicle`);
    }
}