import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarComponent } from './components/car/car.component';
import { OwnerComponent } from './components/owner/owner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { Web3Service } from './app.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ConstantsService } from './app.constants';
import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './toast.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarComponent,
    OwnerComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [Web3Service, AuthService, ConstantsService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
