import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AddProductCartService} from 'src/app/servicios/addProductCart.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [AddProductCartService],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private dataUser: string = localStorage.getItem("user")+"";
  
  productU : any = "";
  dataAns : any = "";
  id : String = "";
  active : number = 0;
  activeTable: number = 0;
  modal : number =0;
  msgAns: String ="";
 
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

  ansAdd: any;
  tableCart : String="";
  idProdDelete : number=0;

  error: any;
  dataTableCart: any;
  optionDeleteProd: number=0;

  constructor(private cart : AddProductCartService,
    private route: ActivatedRoute, private http: HttpClient) {   
      this.showDataProduct(false); 
     }

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get('id')?.trim()+"";
    this.showDataProduct(true);
    //this.dataAns = this.cart.listProdCart(this.dataUser);
  }
    
  showDataProduct(action: Boolean){

    if(action){
      this.active = 1;
      //this.productU = this.cart.showDetailsCart(this.id);
      this.showDetailsCart(this.id);
      this.getTableProduct(); 
    }
 
  }

  showCart(){
    
    this.dataAns = this.showFullCart(this.dataUser);
    this.activeTable=2;
  }

  getTableProduct(){
    this.activeTable=0;
   
    this.listProdCart(this.dataUser);
    this.activeTable=1;

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


  ansAddProduct(msg: String){

    this.msgAns = msg;
    this.modal = 1;
  }

  //Peticiones al servidor
  addProductToCart(){

    this.http.get<any>("https://localhost:44370/addProductCart?codProduct="+this.id+"&quantity="+this.cant+"&user_email="+this.dataUser).subscribe(data => {  
      console.log(data);
      if(data.estado){
        this.ansAddProduct(data.mensaje);
      }
    },error => this.error = error);
       
  }

  showDetailsCart(codProd: String){
    this.http.get<any>("https://localhost:44370/infoProductCart?codProduct="+codProd).subscribe(data => {
      this.name = data.name;
      this.descrip = data.despcrition;
      this.desc = data.discount;
      this.price = data.price;

    },error => this.error = error);

  return this.dataAns;

}


listProdCart(email: String){
  this.http.get<any>("https://localhost:44370/showCart?email="+email).subscribe(data => {

    this.dataAns = data;
    this.numList = this.dataAns.length;

    for (let i = 0; i < this.dataAns.length; i++) {
      this.kg += this.dataAns[i].quantity;
      this.total += this.dataAns[i].subtotal;
    }

    this.totalFake= this.total;
    this.kgFake= this.kg;


    },error => this.error = error);

}

showFullCart(email: String){

  //https://localhost:44370/showDetailsCartFull?email=userCustomer1%40gmail.com
  this.http.get<any>("https://localhost:44370/showDetailsCartFull?email="+email.trim()).subscribe(data => {
    this.dataTableCart = data;
    },error => this.error = error);
    
}

openDeleteProd(idProd: number){
  
  console.log("borrando...."+ idProd);

  this.idProdDelete=idProd;

  this.optionDeleteProd =2;
}

closeDeleProd(){
  this.optionDeleteProd =1;
}

deleteProdCart(){

  this.http.get<any>("https://localhost:44370/deleteProductCart?cod_prod="+this.idProdDelete+"&email="+this.dataUser).subscribe(data => {
  
    this.ansAddProduct(data.mensaje);
 
    console.log(data);
    
  },error => this.error = error);
    
  this.closeDeleProd();
 }
 
 

clearCart(){

  this.http.get<any>("https://localhost:44370/clearCart?email="+this.dataUser).subscribe(data => {
    this.ansAddProduct(data.mensaje);
  },error => this.error = error);

}


}
