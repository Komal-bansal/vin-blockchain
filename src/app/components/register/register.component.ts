import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
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
    public router: Router
  ) {

  }
  register() {
    this.loader = true;
    let data = {
      email: this.email,
      password: this.password,
      phone: this.phoneNo,
      name: this.name
    }
    this.auth.register(data).subscribe(res => {
      console.log('you are logged in');
      this.router.navigate(['/ogin'])
      this.loader = false;
    }, err => {
      this.loader = false;
    })
  }
}
