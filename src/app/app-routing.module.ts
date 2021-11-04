import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUser } from './componentes/login-user/login.user';
import { RegisterUser } from './componentes/register-user/register.user';
import { HomeComponent } from './componentes/Home/Home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './componentes/cart/cart.component';
import { CanActivateGuard } from './can-activate.guard';
import { AddProduct } from './componentes/add-product/add.product.component';

const routes: Routes = [
  {path: 'login', component: LoginUser},
  {path: 'register', component: RegisterUser},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent, canActivate: [CanActivateGuard]},
  {path: 'add-product', component: AddProduct, canActivate: [CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
