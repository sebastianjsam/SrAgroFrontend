import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public login = localStorage.getItem("role");
  nameUser = localStorage.getItem("user");

  constructor(private router: Router) {

  }

  ngOnInit(): void {
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

cart(){
  this.router.navigate(['/cart/3'])
  .then(() => {
      window.location.reload();
  });


}

  
}
