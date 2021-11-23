import { Component, OnInit } from "@angular/core";
import { PathService } from "src/app/servicios/path.service";
import { Path } from "../DTOS/PathDTO";
import { FormsModule } from '@angular/forms';


@Component({
    selector: "add-path",
    templateUrl: "./add.path.component.html", 
    styleUrls: ['./add.path.component.css']
})

export class AddPath implements OnInit{
    public path: Path = new Path();
    user = localStorage.getItem("user");
    public lugarDeLlegada: string = "";
    public lugarDeSalida: string = "";

    public constructor(private pathService: PathService){

    }

    ngOnInit(): void {
        
    }

    public agregarRutaDeViaje(){
        this.path.travel_route = this.lugarDeSalida + "-" +this.lugarDeLlegada;
        this.path.id_driver = this.user===null? " ":this.user;
        this.path.state_driver = "disponible";
        this.pathService.addPath(this.path).subscribe(data => {
            console.log(data);
        }, error=>{
            console.log(error);
        }
        
        );
        
    }

}