import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/notification.service";
import { CategoriesService } from "src/app/servicios/categories.services";
import { FarmersProductsService } from "src/app/servicios/farmers.products.service";
import { ProductService } from "src/app/servicios/product.services";
import { Category } from "../DTOS/categoryDTO";
import { FarmerProducts } from "../DTOS/FarmersProductsDTO";
import { Product } from "../DTOS/productDTO";
import { References } from "../DTOS/referencesDTO";
import { FirebaseStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
@Component({
    selector: "add-product",
    templateUrl: "./add.product.component.html",
    styleUrls: ['./add.product.component.css']
})

export class AddProduct implements OnInit {
//firebase






    seleccionado: string = "";
    public categories = new Array<Category>();
    public farmersProducts = new Array<FarmerProducts>();
    public producto = new Product();
    nameuser: string = "";
    var = localStorage.getItem("user");

    public constructor(private categoriesService: CategoriesService, private productService: ProductService, private farmersproductsService: FarmersProductsService, private notifyService: NotificationService) {
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB7g0Tp5prdq2AswTGD8l9S2w_5UXnHnk",
  authDomain: "chatautomatizacion-d668c.firebaseapp.com",
  databaseURL: "https://chatautomatizacion-d668c-default-rtdb.firebaseio.com",
  projectId: "chatautomatizacion-d668c",
  storageBucket: "chatautomatizacion-d668c.appspot.com",
  messagingSenderId: "917251004154",
  appId: "1:917251004154:web:78592a63c5d4cc5c515b43"
};



    }


    ngOnInit(): void {
        this.consultarCategorias();
        this.verProductosDeAgricultor();
    }

    public consultarCategorias() {
        this.categoriesService.listCategories().subscribe((listaCategorias: Category[]) => {
            this.categories = listaCategorias;
            console.log(this.categories);
        })
    }

    public guardarCategoria() {
        console.log("seleccionado " + this.seleccionado);
        this.categories.forEach(category => {
            if (category.name == this.seleccionado) {
                this.producto.category = category;
            }
        });

    }

    public agregarProducto() {
        if (this.validarCampos()) {
            this.productService.addProduct(this.producto, this.var).subscribe(data => {
                console.log(data);
                this.notifyService.showSuccess("El producto se agregó de manera exitosa", "srAgro.com");
                this.verProductosDeAgricultor();
            }, error => {
                console.log(error);
            }

            );
        }
        else{
            console.log("false");
        }


    }

    public cancelar() {
        console.log("seleccionado: " + this.seleccionado);
        console.log(this.producto)
    }

    public verProductosDeAgricultor() {
        this.farmersproductsService.listFarmersProducts(this.var).subscribe((listaProductosDeAgricultor: FarmerProducts[]) => {
            this.farmersProducts = listaProductosDeAgricultor;
            console.log(this.farmersProducts);
        });
    }

    public validarCampos(): boolean {
        if (this.producto.references.entry_date > this.producto.references.expiration_date) {
            this.notifyService.showError("La fecha de cosecha es mayor a la de expiración", "srAgro.com");
            return false;
        }
        if(this.producto.name == ""){
            this.notifyService.showError("Debe ingresar un nombre de producto", "srAgro.com");
            return false;
        }
        if(this.producto.price <= 0){
            this.notifyService.showError("Debe ingresar un precio mayor a cero", "srAgro.com");
            return false;
        }
        if(this.producto.quantity <= 0){
            this.notifyService.showError("Debe ingresar una cantidad de producto mayor a cero", "srAgro.com");
            return false;
        }
        if(this.producto.category.name == ""){
            this.notifyService.showError("Debe ingresar una categoría de producto", "srAgro.com");
            return false;
        }

        return true;
    }


    fechaCosecha(event: any) {
        this.producto.references.entry_date = event.target.value;
        console.log(event.target.value);
    }

    fechaExpiracion(event: any) {
        this.producto.references.expiration_date = event.target.value;
        console.log(event.target.value);
    }

}
