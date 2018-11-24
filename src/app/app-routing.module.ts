import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarComponent } from './components/car/car.component';
import { OwnerComponent } from './components/owner/owner.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'car', component: CarComponent },
  { path: 'owner', component: OwnerComponent },
  {
    path: '',
    redirectTo: '/car',
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
