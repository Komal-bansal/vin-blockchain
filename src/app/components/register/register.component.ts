import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastService } from './../../toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: any;
  name: any;
  phoneNo: any;
  loader = false;
  constructor(
    public auth: AuthService,
    public router: Router,
    public toast: ToastService
  ) {

  }
  register() {
    if (!this.email || !this.password || !this.phoneNo || !this.name) this.toast.toastWarning('Please enter all the details before proceeding', 'Warning')
    this.loader = true;
    let data = {
      email: this.email,
      password: this.password,
      phone: this.phoneNo,
      name: this.name
    }
    this.auth.register(data).subscribe(res => {
      this.toast.toastSuccess('Please verify your email to continue', 'Successfully Registered')
      this.router.navigate(['/ogin']);
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }
}
