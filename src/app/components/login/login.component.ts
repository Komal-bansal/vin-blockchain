import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../providers/toast.service';
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
    console.log(this.auth.isLoggedIn(), 'login')
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/car');

    }
  }

  login() {
    this.loader = true;
    let data = {
      email: this.email,
      password: this.password
    }
    this.auth.login(data).subscribe((res: any) => {
      this.router.navigate(['/car'])
      this.loader = false;
      this.toast.toastSuccess('Welcome to VINBO', 'Sucessfully logged in')
      localStorage.setItem('user', JSON.stringify(res.result));
      localStorage.setItem('token', res.token)
    }, err => {
      this.loader = false;
      let errM = JSON.parse(err._body).message || 'Some error occured';
      this.toast.toastError(errM, 'error')
    })
  }


}


