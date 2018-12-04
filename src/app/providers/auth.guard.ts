import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private auth: AuthService) { }

    canActivate() {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            alertify.alert()
                .setHeader('Unauthorised Access')
                .setting({
                    'closableByDimmer': false,
                    'movable': false,
                    'message': `Please login to continue`,
                }).show();
            return false;
        }
    }


}
