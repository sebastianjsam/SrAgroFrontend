import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../componentes/dataService/data.service';
import { FarmerProducts } from '../componentes/DTOS/FarmersProductsDTO';
import { Product } from '../componentes/DTOS/productDTO';
import { NotificationService } from '../notification.service';
import { ProductService } from '../servicios/product.services';

@Component({
  selector: 'app-modal.window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.css']
})
export class ModalWindow implements OnInit {

  public constructor(public modal: NgbModal, public datos: DataService, public serviceProducto: ProductService, private notifyService: NotificationService) { }
  public product: FarmerProducts = new FarmerProducts();


  ngOnInit(): void {
    console.log(this.datos.product);
    this.product = this.datos.product;
  }

  public actualizarProducto() {
    console.log(this.datos.product + "producto de ventana modal");
    let producto: Product = new Product();
    producto.cod_product = this.product.cod_product;
    producto.name = this.product.name;
    producto.quantity = +this.product.quantity;
    producto.price = +this.product.price;

    this.serviceProducto.updateProduct(producto).subscribe(data => {
      console.log(data);
      this.notifyService.showSuccess("Producto actualizado", "srAgro.com");
    }, error => {
      console.log(error);
    }
    );
  }

}
