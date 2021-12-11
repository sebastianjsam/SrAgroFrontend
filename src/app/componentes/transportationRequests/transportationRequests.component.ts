import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/servicios/path.service';
import { Path } from '../DTOS/PathDTO';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
/*
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];*/

const COUNTRIES: Path[] = [
  {
    id_path:"1",
   id_driver:'1',
   state_driver:'asd',
   time_in:'2021/02/02',
   time_out:'2021/02/02',
   travel_route:'manizales-La Dorada'
  },
  {
    id_path:"1",
    id_driver:'1',
    state_driver:'asd',
    time_in:'2021/02/02',
    time_out:'2021/02/02',
    travel_route:'manizales-La Dorada'
  },
  {
    id_path:"1",
    id_driver:'1',
    state_driver:'asd',
    time_in:'2021/02/02',
    time_out:'2021/02/02',
    travel_route:'manizales-La Dorada'
  },
  {
    id_path:"1",
    id_driver:'1',
    state_driver:'asd',
    time_in:'2021/02/02',
    time_out:'2021/02/02',
    travel_route:'manizales-La Dorada'
  }
];




@Component({
  selector: 'app-transportationRequests',
  templateUrl: './transportationRequests.component.html',
  styleUrls: ['./transportationRequests.component.css']
})
export class TransportationRequestsComponent implements OnInit {
  paths :Path[]=[];
  countries = COUNTRIES;
  constructor(private pathService: PathService) { }
respuestas:string="";

  ngOnInit() {
    this.ConsultarPaths("s");
  }

  async Aceptarpath(idpath:string,state:string){
    //enviar actualizacion al backend para cambiar el estado del producto, solo actualiza el estado
    this.pathService.Aceptar(idpath,state).subscribe((data) => {
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
