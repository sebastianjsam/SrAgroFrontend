import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AddProductCartService {

  public dataAns : any;
  public dataList : any;
  error: any;
  constructor(private http: HttpClient) { 
    this.dataAns = null;
  }
  

  showDetailsCart(codProd: String):Observable<any>{
      this.http.get<any>("https://localhost:44370/infoProductCart?codProduct="+codProd).subscribe(data => {
      this.dataAns = data;
      },error => this.error = error);

    return this.dataAns;

  }
  listProdCart(email: String):Observable<any>{
    this.http.get<any>("https://localhost:44370/showCart?email="+email).subscribe(data => {
      this.dataList = data;
      },error => this.error = error);

      return this.dataList;
  }

  showFullCart(email: String):Observable<any>{

    //https://localhost:44370/showDetailsCartFull?email=userCustomer1%40gmail.com
    this.http.get<any>("https://localhost:44370/showDetailsCartFull?email="+email.trim()).subscribe(data => {
      this.dataAns = data;
      },error => this.error = error);

    return this.dataAns;
  }

  deleteProducCart(cod_prod: number, email: String):Observable<any>{
//https://localhost:44370/deleteProductCart?cod_prod=39&email=user%40gmail.com

  this.http.get<any>("https://localhost:44370/deleteProductCart?cod_prod="+cod_prod+"&email="+email).subscribe(data => {
    this.dataAns = data;
    },error => this.error = error);

  return this.dataAns;

  }

  clearCart(email: String):Observable<any>{
//https://localhost:44370/clearCart?email=user%40gmail.com
this.http.get<any>("https://localhost:44370/clearCart?email="+email).subscribe(data => {
  this.dataAns = data;
  },error => this.error = error);

return this.dataAns;


  }

  addProductCart(codProd: String, quantity: number, email: String):Observable<any>{
//https://localhost:44370/addProductCart?codProduct=F0701&quantity=20&user_email=user%40gmail.com

      this.dataAns = null;
      this.http.get<any>("https://localhost:44370/addProductCart?codProduct="+codProd+"&quantity="+quantity+"&user_email="+email).subscribe(data => {
          this.dataAns = data;

          console.log(this.dataAns);
          return this.dataAns;  
        },error => this.error = error);

          return this.dataAns;
         
  }

}
