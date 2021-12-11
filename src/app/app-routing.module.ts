import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUser } from './componentes/login-user/login.user';
import { RegisterUser } from './componentes/register-user/register.user';
import { HomeComponent } from './componentes/Home/Home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './componentes/cart/cart.component';
import { CanActivateGuard } from './can-activate.guard';
import { SearchProductComponent } from './componentes/SearchProduct/SearchProduct/SearchProduct.component';
import { AddProduct } from './componentes/add-product/add.product.component';
import { ConsultarProductoComponent } from './componentes/ConsultarProducto/ConsultarProducto.component';
import { AddPath } from './componentes/add-path/add.path.component';
import { TransportationRequestsComponent } from './componentes/transportationRequests/transportationRequests.component';
import { PathhistoryComponent } from './componentes/Pathhistory/Pathhistory.component';


const routes: Routes = [
  {path: 'login', component: LoginUser},
  {path: 'register', component: RegisterUser},
  {path: 'home', component: HomeComponent},
  {path: 'Search', component: SearchProductComponent},
  {path: 'Search/:search', component: SearchProductComponent},
  {path: 'ProductById/:product', component: ConsultarProductoComponent},
  {path: 'cart', component: CartComponent, canActivate: [CanActivateGuard]},
  {path: 'cart/:id', component: CartComponent, canActivate: [CanActivateGuard]},
  {path: 'add-product', component: AddProduct},
  {path: 'add-path', component: AddPath},
  {path: 'TransportationRequests', component:  TransportationRequestsComponent},
  {path: 'Pathhistory', component:PathhistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
