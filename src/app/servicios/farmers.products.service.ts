import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../componentes/DTOS/categoryDTO";
import { FarmerProducts } from "../componentes/DTOS/FarmersProductsDTO";

@Injectable({
    providedIn: "root"
})

export class FarmersProductsService{
    constructor(private http: HttpClient){}

    listFarmersProducts(email:any): Observable<FarmerProducts[]>{
        return this.http.get<FarmerProducts[]>("https://localhost:44370/getProductsFarmers?farmer="+email);
    }
}