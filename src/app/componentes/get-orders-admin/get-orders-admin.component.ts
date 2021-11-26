import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-get-orders-admin',
  templateUrl: './get-orders-admin.component.html',
  styleUrls: ['./get-orders-admin.component.css']
})
export class GetOrdersAdminComponent implements OnInit {


  orders: any;
  error :any;

  num_solic : number = 0;
  num_pay : number = 0;
  num_tram : number = 0;

  total_pay : number =0;

  date_filter: string ="2021-11-01";

  openForm: number =0;

  constructor(private http: HttpClient) { }



  ngOnInit() {

    this.getOrderCustomers('2021-11-10');

  }


  getOrderCustomers(date: string){

    this.num_pay=0;
    this.total_pay =0;
    this.num_tram =0;

    this.http.get<any>("https://localhost:44370/ordersCustomersAdmin?date_filter="+date).subscribe(data => {
    this.orders = data;

    this.num_solic = data.length;


    for (let i = 0; i < data.length; i++) {


      if(data[i].status_pay == 'Pagado'){
        this.num_pay++;

        this.total_pay += data[i].quantity_pay;
      }else{
        this.num_tram++;

      }
    }

    
      },error => this.error = error);
  }


  filtrarOrders(){

   // alert(this.date_filter);

    this.getOrderCustomers(this.date_filter);
  }


  closeOrderBill(){
    this.openForm = 1;

  }


}
