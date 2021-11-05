import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  textoDeInput?: string
  public login = localStorage.getItem("role");
  nameUser = localStorage.getItem("user");

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.textoDeInput="";
  }

  LogIn() {
    this.router.navigate(["login"]);
  }

  loginOut(){

    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("login");

    this.router.navigate(['/home'])
    .then(() => {
        window.location.reload();
    });
  }

  SearchProduct(){

    this.router.navigate(["Search"]);
  }




}
