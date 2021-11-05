import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from 'src/app/servicios/product.services';
import { environment } from 'src/environments/environment';
import { Product } from '../../DTOS/productDTO';

@Component({
  selector: 'app-SearchProduct',
  templateUrl: './SearchProduct.component.html',
  styleUrls: ['./SearchProduct.component.css'],
})
export class SearchProductComponent implements OnInit {
  @Input() dato: string = '';

  //Ordenar por
  Order: string[] = ['Descendente', 'Ascendente'];
  seleccionado: string = 'Descendente';
  seleccionNum: number = 1;
  //-----

  public productos = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  public resolverFoto(foto: any) {
    const baseUrl = environment.baseUrl;
    return "'assets/1.jpg'";
    //return `${baseUrl}/foto_producto/${foto}`;
  }
  validarSeleccion() {
    switch (this.seleccionado) {
      case 'Descendente':
        this.seleccionNum = 1;
        break;
      case 'Ascendente':
        this.seleccionNum = 2;
        break;
      default:
        break;
    }
  }

  async ngOnInit() {
    //this.productos = await this.productService.SearchProduct("a");
    //problemas que la url cambia pero el filtrado no se corrige suscribiensoe a el parametro
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dato = params.get('search') || '';
      this.productService.SearchProduct(this.dato).subscribe((data) => {
        this.productos = data;
        //console.table(data);
      });
    });
  }



  async Filtrar(){
    this.productService.FilterProduct(this.dato).subscribe((data) => {
      this.productos = data;
      //console.table(data);
    });
  }
}
