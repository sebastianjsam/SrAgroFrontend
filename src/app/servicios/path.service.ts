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

    public ListarPaths(correo:string): Observable<any>{
      return this.http.post("https://localhost:44370/SearchPathIdDrivers?idDriver=yamile.driver%40gmail.com",{'headers':Headers});
  }
  public AceptarRuta(idpath:string,state:string): Observable<any>{
    return this.http.put(" https://localhost:44370/updateState?idPath="+idpath+"&state="+state,{'headers':Headers});
}

public ListOrderTransportation(correo:string): Observable<any>{
  return this.http.post("https://localhost:44370/transportation_orders?idDriver=yamile.driver%40gmail.com",{'headers':Headers});
}

public AceptarTransportar(id_orderTrans:string,state:string): Observable<any>{
  return this.http.put(" https://localhost:44370/AcceptOrder?IdOrdenTransporte="+id_orderTrans+"&state="+state,{'headers':Headers});
}

}
