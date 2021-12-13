import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/servicios/path.service';
import { Path } from '../DTOS/PathDTO';

@Component({
  selector: 'app-Pathhistory',
  templateUrl: './Pathhistory.component.html',
  styleUrls: ['./Pathhistory.component.css']
})
export class PathhistoryComponent implements OnInit {
  paths :Path[]=[];
  //countries = COUNTRIES;
  constructor(private pathService: PathService) { }
respuestas:string="";

  ngOnInit() {
    this.ConsultarPaths("s");
  }

  async Aceptarpath(idpath:string,state:string){
    //enviar actualizacion al backend para cambiar el estado del producto, solo actualiza el estado
    this.pathService.AceptarRuta(idpath,state).subscribe((data) => {
      this.respuestas = data;
      alert("Solicitud procesada exitosamente");
      //console.table(data);
    });
    this.ConsultarPaths("s");

  }


  async ConsultarPaths(correo:string) {
    this.pathService.ListarPaths(correo).subscribe((data) => {
      this.paths = data;
      console.table(data);
    });
  }

  validarPendiente(state_driver:string){
      if(state_driver=="pendiente")
      {
        return true;
      }else
      {
        return false;
      }
  }



}
