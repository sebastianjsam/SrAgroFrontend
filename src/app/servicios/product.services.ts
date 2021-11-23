import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../componentes/DTOS/productDTO";

@Injectable({
    providedIn: "root"
})

export class ProductService{

    constructor(private http: HttpClient){}
    
    addProduct(product: Product, email: any): Observable<any>{
        return this.http.post("https://localhost:44370/AddProducto?idFarmer="+email, product );
    }


    public  SearchProduct(search:string):Observable<any>{
      const headers = { 'content-type': 'application/json'}
      //const body=JSON.stringify(product);
      console.log("Buscar por: "+search)
        return  this.http.get("https://localhost:44370/searchProduct?searchName="+search,{'headers':headers});
    }

    public  FilterProduct(search:string,category:string,price:string,quantity:string):Observable<any>{
      const headers = { 'content-type': 'application/json'}
      //const body=JSON.stringify(product);
      console.log("Filtrado : "+search);
      console.log("https://localhost:44370/filterProduct?searchName="+search+"&category="+category+"&price="+price+"&quantity="+quantity);
        return  this.http.get("https://localhost:44370/filterProduct?searchName="+search+"&category="+category+"&price="+price+"&quantity="+quantity,{'headers':headers});
    }

}
