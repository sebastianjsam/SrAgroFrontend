import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-orders-customer',
  templateUrl: './get-orders-customer.component.html',
  styleUrls: ['./get-orders-customer.component.css']
})
export class GetOrdersCustomerComponent implements OnInit {

  private dataUser: string = localStorage.getItem("user")+"";

  error :any;

  nameUser: string ="";
  IDUser: string = "";
  phone:string ="";

  numOrders: number = 0;

  id_order:number=0;
  openForm: number =0;

  orderBillCus: any;
  orders: any;

  dataTableOrder: any; 



  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.dataCustomer(this.dataUser);
    this.ordersCustomer(this.dataUser);
  }


  dataCustomer(email: string){


    this.http.get<any>("https://localhost:44370/infoCustomerOrder?email="+email).subscribe(data => {
      this.nameUser = data.fullname;
      this.IDUser = data.id_customer;
      this.phone = data.phone;

      },error => this.error = error);
  }

  ordersCustomer(email: string){

    this.http.get<any>("https://localhost:44370/ordersCustomer?email="+email).subscribe(data => {
      this.orders = data; 
      this.numOrders = data.length;

      },error => this.error = error);

  }

  listProductOrder(){


  }

  orderBill(id_order: number){
    
    this.http.get<any>("https://localhost:44370/productsOrder?cod_order="+id_order).subscribe(data => {
      this.dataTableOrder = data;
      },error => this.error = error);

      this.http.get<any>("https://localhost:44370/infoProductsOrder?cod_order="+id_order).subscribe(data => {
        this.orderBillCus = data;
        },error => this.error = error);


    this.openForm = 2;
    this.id_order = id_order;
 
  }
  
  closeOrderBill(){
    this.openForm = 1;

  }

  cancelOrder(id_order: number){
   // this.openFormCancel();

   if (confirm("Deseas cancelar la orden de pedido?")) {
    
    this.http.get<any>("https://localhost:44370/cancelOrder?cod_order="+id_order).subscribe(data => {
      alert(data.mensaje);
      location.reload();

      },error => this.error = error);

  } else {
  //  location.reload();
  }

}



}
