import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../componentes/DTOS/categoryDTO";

@Injectable({
    providedIn: "root"
})

export class CategoriesService{
    constructor(private http: HttpClient){}

    listCategories(): Observable<Category[]>{
        return this.http.get<Category[]>("https://localhost:44370/Categories");
    }
}