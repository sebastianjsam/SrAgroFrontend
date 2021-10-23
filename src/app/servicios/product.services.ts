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
        return this.http.post("https://localhost:44370/AddProducto", product);
    }
    
}