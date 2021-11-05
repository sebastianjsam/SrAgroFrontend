import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css'],
})
export class TarjetaProductoComponent implements OnInit {
  @Input() producto: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  public resolverRuta(ruta: any) {
    const baseUrl = environment.baseUrl;
    //return "assets/fruta/banana.png";
    //return `${baseUrl}/foto_producto/${this.producto.foto}`;
    if (ruta == "" || ruta=="http:") {
      return 'assets/error.png';
    } else {
      return ruta;
    }
  }

  public detalles() {
    console.log(this.producto);
    this.router.navigate(['/cart/'+ this.producto.cod_product]);
  }
}
