import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginUser } from './componentes/login-user/login.user';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUser } from './componentes/register-user/register.user';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './componentes/Home/Home.component';
import { RouterModule } from '@angular/router';
import { AddProduct } from './componentes/add-product/add.product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUser,
    RegisterUser,
    NavbarComponent,
    HomeComponent, 
    AddProduct
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
