import { Component } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'nl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  loggedIn = this.authService.isLoggedIn();
  constructor(
    public authService: AuthService,
    public router: Router
  ) {

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);

  }

}
