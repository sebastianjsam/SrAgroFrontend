import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { LoginUser } from './componentes/login-user/login.user';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUser } from './componentes/register-user/register.user';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './componentes/Home/Home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './componentes/cart/cart.component';
import {AddProductCartService} from './servicios/addProductCart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginUser,
    RegisterUser,
    NavbarComponent,
    HomeComponent, 
    CartComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
 
  ],
  providers: [AddProductCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
