import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarComponent } from './components/car/car.component';
import { CarViewComponent } from './components/car/view/view.component';
import { OwnerComponent } from './components/owner/owner.component';
import { OwnerViewComponent } from './components/owner/view/view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { Web3Service } from './providers/web3.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './providers/auth.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ConstantsService } from './app.constants';
import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './providers/toast.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppService } from './providers/app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './providers/http.interceptors';
import { AuthGuard } from './providers/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarComponent,
    OwnerComponent,
    SidebarComponent,
    HomeComponent,
    CarViewComponent,
    OwnerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [Web3Service,
    AuthService,
    ConstantsService,
    ToastService,
    AppService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
