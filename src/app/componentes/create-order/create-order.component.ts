import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  private email_user: string = localStorage.getItem("user")+"";

  value_send: number = 0;
  day_send: number = 0;
  total_pay:number = 0;
  totalcart: number = 0;

  address_user: String ="";
  msg_error: String = "";
  city_user: String = "";
  phone_user: String = "";
  descript_user: String = "";

  openForm: number = 1; 

  optionTerms: boolean = false;

  pay_method: string = "";
  send_method: string = "";

  reg_paymethod: string = "";
  reg_sendmethod: number = 0;

  dataAns : any;
  error :any;
  totalCart: number =0;

  sendData: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
    this.listProdCart(this.email_user.trim());
  
  }

  completeData(){

    if(!this.loadPayMethod()){
      this.openForm = 2;

    }
    
  }

  sendDataOrder(){
    
    if(!this.checkFields()){
      this.totalPay();
      this.loadMethodPay();

      this.requestOrder();

    }
  }

  closeForm(){

    this.openForm = 1;
    this.clearField();
  }

  checkFields(){

    if(this.address_user.trim().length==0){
      this.msg_error = "\n* Dirección \n";
    }
    if(this.city_user.trim().length==0){
      this.msg_error += "* Ciudad \n";
    }
    if(this.phone_user.trim().length==0){
      this.msg_error += "* Número de contacto \n";
    }

    if(this.msg_error.length>0){
      alert('Por favor completar los siguientes campos: '+this.msg_error)
      this.msg_error="";
      
      return true;
    }
    return false;    
  }


  loadPayMethod(){

    if(this.pay_method.length==0){
      this.msg_error = "\nMétodo de pago \n";
    }

    if(this.send_method.length ==0){
      this.msg_error += "Método de envio \n";
    }



    if(this.msg_error.length>0){
      this.msg_error+= "Selecciona la(s) siguiente(s) opción(es): "+this.msg_error+"\n";
    }


    if(!this.optionTerms){
      this.msg_error += "Acepta términos y condiciones?";
      alert(this.msg_error);
      this.msg_error = "";
      return true;
    }
    return false;
  }

  clearField(){
    this.address_user ="";
    this.msg_error= "";
    this.city_user= "";
    this.phone_user= "";
  }


  totalPay(){

    switch (this.send_method) {
      case 'local':
        this.value_send = 25600;
        this.reg_sendmethod = 6;
          break;
      case 'nacional':
        this.value_send = 45000;
        this.reg_sendmethod = 12;
          break;
      default:
          break;
    }

    this.total_pay = this.value_send + this.totalcart;
  }

  loadMethodPay(){
    
    switch (this.pay_method) {
      case 'bank':
        this.reg_paymethod = "Consignación Nacional Bancolombia";
          break;
      case 'transf':
        this.reg_paymethod = "Transferencia electrónica";
          break;
      default:
          break;
    }
  }
  
  listProdCart(email: String){
    this.http.get<any>("https://localhost:44370/showCart?email="+email).subscribe(data => {
      this.dataAns = data;

      for (let i = 0; i < this.dataAns.length; i++) {
        this.totalcart += this.dataAns[i].subtotal;
      }
      this.total_pay = this.totalcart;

      },error => this.error = error);
  }


  requestOrder(){
//https://localhost:44370/createNewOrder?user_email=user%40gmail.com&address_send=Calle%2065%20No%2026%20-%2010
//&num_phone=%2B573103949871&city_send=Manizales&descrip_send=Pedido%20enpuerta%20de%20la%20casa
//&num_daysend=5&method_pay=Transacci%C3%B3n%20bancaria&pay_send=25000

    this.sendData = "user_email="+this.email_user+"&address_send="+this.address_user+
                    "&num_phone="+this.phone_user+"&city_send="+this.city_user+
                    "&descrip_send="+this.descript_user+"&num_daysend="+this.reg_sendmethod+
                    "&method_pay="+this.reg_paymethod + "&pay_send="+this.value_send;

this.http.get<any>("https://localhost:44370/createNewOrder?"+this.sendData).subscribe(data => {
     

      if(data.estado){
        alert('Se ha realizado el pedido con exito. Información de pedido: \n'+ data.mensaje)

        this.router.navigate(['/home']);
      }else{

        alert('No se pudo realizar la transacción: '+ data.mensaje)
      }


      },error => this.error = error);


  }




}
