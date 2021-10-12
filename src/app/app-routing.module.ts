import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUser } from './componentes/login-user/login.user';
import { RegisterUser } from './componentes/register-user/register.user';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'login', component: LoginUser},
  {path: 'register', component: RegisterUser}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
