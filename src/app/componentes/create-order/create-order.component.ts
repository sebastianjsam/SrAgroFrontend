import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {


  value_send: number = 25000;

  total_pay:number = 25000;


  openForm: number = 1; 

  constructor() { }

  ngOnInit() {
  
  console.log('Good');
  
  }

  completeData(){

    this.openForm = 2;

  }

  sendDataOrder(){

  }

  closeForm(){

    this.openForm = 1;
  }


}
