import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoginUserService{
  constructor(private http: HttpClient){}

  validateUser(user: any): Observable<any>{
    return this.http.get<any>("https://localhost:44370/Login?username=user@gmail.com&password=54321");
  }
}