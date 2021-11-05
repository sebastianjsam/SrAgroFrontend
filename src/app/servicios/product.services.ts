import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../componentes/DTOS/productDTO";

@Injectable({
    providedIn: "root"
})

export class ProductService{

    constructor(private http: HttpClient){}
    addProduct(product: Product): Observable<any>{
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(product);
      console.log(body)
        return this.http.post("https://localhost:44370/AddProducto", body,{'headers':headers});
    }


    public  SearchProduct(search:string):Observable<any>{
      const headers = { 'content-type': 'application/json'}
      //const body=JSON.stringify(product);
      console.log("Buscar por: "+search)
        return  this.http.get("https://localhost:44370/searchProduct?searchName="+search,{'headers':headers});
    }

    public  FilterProduct(search:string):Observable<any>{
      const headers = { 'content-type': 'application/json'}
      //const body=JSON.stringify(product);
      console.log("Filtrado : "+search)
      search="b";
        return  this.http.get("https://localhost:44370/filterProduct?searchName="+search+"&category=1&price=100&quantity=100",{'headers':headers});
    }

}
