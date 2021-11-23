import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Path } from "../componentes/DTOS/PathDTO";
import { Observable } from "rxjs";



@Injectable({
    providedIn: "root"
})

export class PathService{

    constructor(private http: HttpClient){}

    addPath(path: Path): Observable<any>{
        return this.http.post("https://localhost:44370/AddPath", path);
    }
}