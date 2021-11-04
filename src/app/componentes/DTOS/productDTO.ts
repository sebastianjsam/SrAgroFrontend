import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { Category } from "./categoryDTO";
import { References } from "./referencesDTO";

export class Product{
    public cod_product: string = "";
    public name: string = "";
    public despcrition: string = "";
    public price: number = 0;
    public quantity: number = 0;
    public discount: number = 0;
    public iva: number = 0;
    public references: References = new References();
    public category: Category = new Category();
}