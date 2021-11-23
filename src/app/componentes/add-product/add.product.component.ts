import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/servicios/categories.services";
import { FarmersProductsService } from "src/app/servicios/farmers.products.service";
import { ProductService } from "src/app/servicios/product.services";
import { Category } from "../DTOS/categoryDTO";
import { FarmerProducts } from "../DTOS/FarmersProductsDTO";
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
    public farmersProducts = new Array<FarmerProducts>();
    public producto = new Product();
    nameuser: string = "";
    var = localStorage.getItem("user");
    
    
    

    public constructor(private categoriesService: CategoriesService, private productService: ProductService, private farmersproductsService: FarmersProductsService){
        
    }


    ngOnInit(): void {
        this.consultarCategorias();
        this.verProductosDeAgricultor();
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
        this.productService.addProduct(this.producto, this.var).subscribe(data => {
            console.log(data);
            this.verProductosDeAgricultor();
        }, error=>{
            console.log(error);
        }
        
        );
        
    }

    public cancelar(){
        console.log("seleccionado: "+this.seleccionado);
        console.log(this.producto)
    }

    public verProductosDeAgricultor(){
        this.farmersproductsService.listFarmersProducts(this.var).subscribe((listaProductosDeAgricultor: FarmerProducts[]) => {
            this.farmersProducts = listaProductosDeAgricultor;
            console.log(this.farmersProducts);
        });
    }

}