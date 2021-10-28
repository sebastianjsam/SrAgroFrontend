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
  constructor(private http: HttpClient) { }
  

  showDetailsCart(codProd: String):Observable<any>{
      this.http.get<any>("https://localhost:44370/infoProductCart?codProduct="+codProd).subscribe(data => {
      this.dataAns = data;
      },error => this.error = error);

    return this.dataAns;

  }
//https://localhost:44370/showCart?email=userCustomer1%40gmail.com
  listProdCart(email: String):Observable<any>{
    this.http.get<any>("https://localhost:44370/showCart?email="+email).subscribe(data => {
      this.dataList = data;
      },error => this.error = error);

      return this.dataList;
  }




}
