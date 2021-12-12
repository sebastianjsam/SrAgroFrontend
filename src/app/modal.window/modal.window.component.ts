import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import {NgbModal}from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../componentes/dataService/data.service';
import { ProductService } from '../servicios/product.services';

@Component({
  selector: 'app-modal.window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.css']
})
export class ModalWindow implements OnInit {

  public constructor(public modal: NgbModal, public  datos: DataService, public serviceProducto: ProductService) { }
  

  ngOnInit(): void {
      console.log(this.datos.product);
  }
   
  public actualizarProducto(){
    console.log(this.datos.product.cod_product);
    this.serviceProducto.updateProduct(this.datos.product);
  }

}
