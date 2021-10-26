import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddProductCartService {

  constructor(private http: HttpClient) { }


  showProductCart(emailUser: String){
    return this.http.get("https://localhost:44370/showCart?email="+emailUser).pipe(
      map((response : any) =>{
        localStorage.setItem("details", response[0]);
      })
    );

  }

}
