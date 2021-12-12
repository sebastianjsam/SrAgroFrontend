import { Injectable } from "@angular/core";
import { FarmerProducts } from "../DTOS/FarmersProductsDTO";

@Injectable({
    providedIn: "root"
})

export class DataService{
    public product: FarmerProducts = new FarmerProducts();
}