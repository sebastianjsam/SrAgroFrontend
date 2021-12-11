import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

constructor(private http: HttpClient) { }

public ListarTransportationRequests(correo:string): Observable<any>{
  return this.http.post("https://localhost:44370/SearchPathIdDrivers?idDriver=yamile.driver%40gmail.com",{'headers':Headers});
}
}
