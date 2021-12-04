import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TransportInformation } from "../componentes/DTOS/TransportInformarionDTO";

@Injectable({
    providedIn: "root"
})

export class TransportInformationService{
    constructor(private http: HttpClient){}

    listTransportInformation(): Observable<TransportInformation[]>{
        return this.http.get<TransportInformation[]>("https://localhost:44370/getTransportInformation");
    }
}