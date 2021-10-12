import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})
export class LoginUserService{
  constructor(private http: HttpClient){}


  validateUser(user: string, password: string): Observable<any>{
    return this.http.get("https://localhost:44370/Login?"+"username="+user+"&password="+password).pipe(
      map((response : any) =>{
        localStorage.setItem("role", response.role);
        localStorage.setItem("user", response.user);
        localStorage.setItem("login", "OK");
      })
    );
  }
}