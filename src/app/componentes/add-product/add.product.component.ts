import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/servicios/categories.services";
import { ProductService } from "src/app/servicios/product.services";
import { Category } from "../DTOS/categoryDTO";
import { Product } from "../DTOS/productDTO";
import { References } from "../DTOS/referencesDTO";

@Component({
    selector: "add-product",
    templateUrl: "./add.product.component.html",
    styleUrls: ['./add.product.component.css']
})

export class AddProduct implements OnInit{
    seleccionado:string = "";
    public categories = new Array<Category>();
    public producto = new Product();
    
    public constructor(private categoriesService: CategoriesService, private productService: ProductService){
        
    }


    ngOnInit(): void {
        this.consultarCategorias();

    }

    public consultarCategorias(){
        this.categoriesService.listCategories().subscribe((listaCategorias: Category[]) =>{
            this.categories = listaCategorias;
            console.log(this.categories);
        })
    }

    public guardarCategoria(){
        console.log("seleccionado "+this.seleccionado);
        this.categories.forEach(category => {
            if(category.name == this.seleccionado){
                this.producto.category = category;
            }
        });

    }

    public agregarProducto(){
        this.productService.addProduct(this.producto).subscribe(data => {
            console.log(data);
        });
    }

    public cancelar(){
        console.log("seleccionado: "+this.seleccionado);
        console.log(this.producto)
    }

}