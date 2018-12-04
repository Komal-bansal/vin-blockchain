import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as alertify from 'alertifyjs';

@Injectable()
export class ToastService {
    constructor(
        public toastr: ToastrService
    ) { }


    toastSuccess(title, message) {
        this.toastr.success(title, message, {
            closeButton: true,
            positionClass: 'toast-bottom-right',
            titleClass: 'title',
            progressAnimation: "increasing",
            enableHtml: true
        })
    }

    toastError(title, message) {
        this.toastr.error(title, message, {
            closeButton: true,
            positionClass: 'toast-bottom-right',
            titleClass: 'title',
            progressAnimation: "increasing",
            enableHtml: true

        })
    }

    toastInfo(title, message) {
        this.toastr.error(title, message, {
            closeButton: true,
            positionClass: 'toast-bottom-right',
            titleClass: 'title',
            progressAnimation: "increasing",
            enableHtml: true

        })
    }

    toastWarning(title, message) {
        this.toastr.warning(title, message, {
            closeButton: true,
            positionClass: 'toast-bottom-right',
            titleClass: 'title',
            progressAnimation: "increasing",
            enableHtml: true

        })
    }


    knownError(msg: string) {
        alertify.alert()
            .setHeader('Error')
            .setting({
                'closableByDimmer': false,
                'label': 'Okay',
                'movable': false,
                'message': msg,
                'onok': function () { }
            }).show();
    }

    noInternetAlert() {

        alertify.alert()
            .setHeader('Network Error')
            .setting({
                'closableByDimmer': false,
                'label': 'Okay',
                'movable': false,
                'message': 'You might not be connected to Internet.<br/>Please check your connection and try again.',
                'onok': function () { }
            }).show();
    }

    serverDownAlert() {
        alertify.alert()
            .setHeader('Bad Gateway')
            .setting({
                'closableByDimmer': false,
                'label': 'Okay',
                'movable': false,
                'message': 'Sorry for the inconvenience. Server is down. <br/>Try again after some time. <br/>Thank You.',
                'onok': function () { }
            }).show();
    }

    unknownErrorAlert() {
        alertify.alert()
            .setHeader('Unknown Error')
            .setting({
                'closableByDimmer': false,
                'label': 'Okay',
                'movable': false,
                'message': 'Some unexpected error occured.',
                'onok': function () { }
            }).show();
    }

}