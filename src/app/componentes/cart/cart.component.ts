import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AddProductCartService} from 'src/app/servicios/addProductCart.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [AddProductCartService]
})
export class CartComponent implements OnInit {

  private dataUser: string = localStorage.getItem("user")+"";
  
  productU : any = "";
  dataAns : any = "";
  id : String = "";
  active : number = 0;
  activeTable: number = 0;
 
  name: String = "";
  descrip : String = "";
  price: number = 0;
  cant : number = 1;
  subtotal : number = 0;
  desc : number = 0;
  numList : number = 0;

  total: number = 0;
  kg: number = 0;

  listProduct : any;
  tope: number = 100;

  totalFake: number =0;
  kgFake: number = 0;

  constructor(private cart : AddProductCartService,
    private route: ActivatedRoute) {     }

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id')?.trim()+"";
    this.productU = this.cart.showDetailsCart(this.id );
    this.dataAns = this.cart.listProdCart(this.dataUser);
    
  }
    
  showDataProduct(action: Boolean){

    this.active = 1;
    this.activeTable=1;
    if(action){
      this.productU = this.cart.showDetailsCart(this.id );
      this.name = this.productU.name;
      this.descrip = this.productU.despcrition;
      this.desc = this.productU.discount;
      this.price = this.productU.price;
      this.getTableProduct();
     console.log(this.productU);
    
    console.log(this.dataAns);
    }
 
  }

  showCart(){
    this.getTableProduct();
    this.activeTable=2;
  }

  getTableProduct(){

    this.dataAns = this.cart.listProdCart(this.dataUser.trim());
    this.numList = this.dataAns.length;

    for (let i = 0; i < this.dataAns.length; i++) {
      this.kg += this.dataAns[i].quantity;
      this.total += this.dataAns[i].subtotal;
    }

    this.totalFake= this.total;
    this.kgFake= this.kg;

  }


  plusCant(){
    if(this.cant <= this.tope){
      this.cant++;
      this.calcSubt();
    }

 
  }

  restCant(){

    if(this.cant>0){
      this.cant--;
      this.calcSubt();
    }
  }

  calcSubt(){
    this.subtotal = this.cant*this.price- (this.cant*this.price*this.desc)/100;
    this.totalFake =this.total + this.subtotal;
    this.kgFake = this.kg +this.cant;
  }


  listProducts(){


  }

}
