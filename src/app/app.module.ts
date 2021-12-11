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
import { AddProduct } from './componentes/add-product/add.product.component';
//import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import { SearchProductComponent } from './componentes/SearchProduct/SearchProduct/SearchProduct.component';

import { TarjetaProductoComponent } from './componentes/tarjeta-producto/tarjeta-producto.component';

import { CommonModule } from '@angular/common';
import { CartComponent } from './componentes/cart/cart.component';
import {AddProductCartService} from './servicios/addProductCart.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarProductoComponent } from './componentes/ConsultarProducto/ConsultarProducto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPath } from './componentes/add-path/add.path.component';

import { ToastrModule } from 'ngx-toastr';
import { TransportationRequestsComponent } from './componentes/transportationRequests/transportationRequests.component';
import { PathhistoryComponent } from './componentes/Pathhistory/Pathhistory.component';

import { CreateOrderComponent } from './componentes/create-order/create-order.component';
import { GetOrdersCustomerComponent } from './componentes/get-orders-customer/get-orders-customer.component';
import { GetOrdersAdminComponent } from './componentes/get-orders-admin/get-orders-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUser,
    RegisterUser,
    NavbarComponent,
    HomeComponent,
    AddProduct,
    SearchProductComponent,
    TarjetaProductoComponent,
    CartComponent,
    ConsultarProductoComponent,
    CreateOrderComponent,
    GetOrdersCustomerComponent,
    GetOrdersAdminComponent,
    AddPath,
    TransportationRequestsComponent,
    PathhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AddProductCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
