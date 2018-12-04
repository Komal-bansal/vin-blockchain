import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarComponent } from './components/car/car.component';
import { CarViewComponent } from './components/car/view/view.component';
import { OwnerComponent } from './components/owner/owner.component';
import { OwnerViewComponent } from './components/owner//view/view.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './providers/auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'car', component: CarComponent, canActivate: [AuthGuard] },
  { path: 'car/:id', component: CarViewComponent, canActivate: [AuthGuard] },
  { path: 'owner', component: OwnerComponent, canActivate: [AuthGuard] },
  { path: 'owner/:id', component: OwnerViewComponent, canActivate: [AuthGuard] },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
