import { Component, OnInit } from "@angular/core";
import { PathService } from "src/app/servicios/path.service";
import { Path } from "../DTOS/PathDTO";
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/notification.service'
import { TransportInformationService } from "src/app/servicios/transport.information.service";
import { TransportInformation } from "../DTOS/TransportInformarionDTO";



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
    public fechasalida: Date = new Date();
    public time: Date = new Date();

    public constructor(private pathService: PathService, private notifyService : NotificationService){

    }

    ngOnInit(): void {
    }

    public agregarRutaDeViaje(form_path: any){

        if(form_path.form.valid && this.validarCampos()){
            this.path.travel_route = this.lugarDeSalida + "-" +this.lugarDeLlegada;
            this.path.id_driver = this.user===null? " ":this.user;
            this.path.state_driver = "disponible";
            this.pathService.addPath(this.path).subscribe(data => {
                this.notifyService.showSuccess("Se agregó la ruta correctamente", "srAgro.com")
                console.log(data);
    
            }, error=>{
                console.log(error);
            }
            
            );
            
        }

        else{
            this.validarCampos();
        }
        
    }

   


    public validarCampos(): boolean{
        if(this.path.time_out > this.path.time_in){
            this.notifyService.showError("La fecha de salida es mayor a la de llegada", "srAgro.com");
            return false;
        }
        if(this.lugarDeSalida === ""){
            this.notifyService.showError("Se debe ingresar un lugar de salida", "srAgro.com");
            return false;
        }
        if(this.lugarDeLlegada === ""){
            this.notifyService.showError("Se debe ingresar un lugar de llegada", "srAgro.com");
            return false;
        }
        return true;
    }

    dateChanged(eventDate: string): Date | null {
        return !!eventDate ? new Date(eventDate) : null;
      }

    fechaSalida(event:any){
        this.path.time_out = event.target.value;
        console.log(event.target.value);
    }

    fechaLlegada(event:any){
        this.path.time_in = event.target.value;
        console.log(event.target.value);
    }
}