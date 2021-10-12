import { NullTemplateVisitor } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { LoginUserService } from "src/app/servicios/login.user.service";

@Component({
    selector: 'login-user',
    templateUrl: './login.user.html',
    providers: [LoginUserService],
    styleUrls: ['./login.user.css']

  })

  export class LoginUser implements OnInit{


    public usuario: string = "";

    public password: string = "";

    public constructor(private loginUserService: LoginUserService) {};
    public ngOnInit() {

    }

    public login(){
        //alert("holi");
        let user = {
          username: this.usuario,
          password: this.password
        }
        this.loginUserService.validateUser(user.username, user.password).subscribe(data =>{
          console.log(data);
        });
    }

  
  }
 