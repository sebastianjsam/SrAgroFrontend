import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/servicios/product.services';
import { environment } from 'src/environments/environment';
import { Product } from '../DTOS/productDTO';

@Component({
  selector: 'app-ConsultarProducto',
  templateUrl: './ConsultarProducto.component.html',
  styleUrls: ['./ConsultarProducto.component.css']
})
export class ConsultarProductoComponent implements OnInit {

  idproduct:string='';
 producto:Product | undefined;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idproduct = params.get('product') || '';
      console.log(this.idproduct+"  this.idproduct")
      this.consultarProduct();
    });

  }



  async consultarProduct(){
    this.productService.ConsultarProductoService(this.idproduct).subscribe((data) => {
      this.producto = data;
      console.table(data);
    });
  }

  public resolverRuta() {
  return 'assets/fruta/banana.png';

  }


}
