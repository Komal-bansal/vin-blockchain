import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastService } from './../../toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: any;
  loader = false;
  constructor(
    public auth: AuthService,
    public router: Router,
    public toast: ToastService
  ) {

  }
  ngOnInit() {

  }

  login() {
    this.loader = true;
    let data = {
      email: this.email,
      password: this.password
    }
    console.log('logging in')
    this.auth.login(data).subscribe((res: any) => {
      this.router.navigate(['/car'])
      this.loader = false;
      this.toast.toastSuccess('Sucess', 'Welcome to VINBO')
      localStorage.setItem('user', JSON.stringify(res));
    }, err => {
      this.loader = false;
      let errM = JSON.parse(err._body).message || 'Some error occured';
      this.toast.toastError('error', errM)
    })
  }


}


