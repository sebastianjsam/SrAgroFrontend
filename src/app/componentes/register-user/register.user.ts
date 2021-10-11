import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.user.html"
})
export class RegisterUser implements OnInit{
  users:string[]=["farmer","customer","supervisor", "driver"];
  seleccionado:string = "";
  nombre: string = "";
  apellidos: string = "";
  email: string = "";
  cedula: string = "";
  password: string = "";
  confirmPassword: string = "";
  direccion: string = "";
  celular: string = "";
  descripcion: string = "";
  licencia: string = "";
  seleccionNum: number = 0;

  constructor() {}
  ngOnInit(): void {
  }

  validarSeleccion() {
    switch (this.seleccionado) {
      case 'farmer':
          this.seleccionNum = 1;
          break;
      case 'customer':
          this.seleccionNum = 2;
          break;
      case 'driver':
          this.seleccionNum = 3;
          break;
      case 'supervisor':
          this.seleccionNum = 4;
          break;
      default:
          break;

  }
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }


}