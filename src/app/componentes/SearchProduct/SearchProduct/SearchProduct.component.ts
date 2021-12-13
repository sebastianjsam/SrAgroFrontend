import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoriesService } from 'src/app/servicios/categories.services';
import { ProductService } from 'src/app/servicios/product.services';

//import { ProductService } from 'src/app/servicios/product.services';
import { environment } from 'src/environments/environment';
import { Category } from '../../DTOS/categoryDTO';
import { Product } from '../../DTOS/productDTO';

@Component({
  selector: 'app-SearchProduct',
  templateUrl: './SearchProduct.component.html',
  styleUrls: ['./SearchProduct.component.css'],
})
export class SearchProductComponent implements OnInit {
  //variables para el filtrado de datos
  @Input() dato: string = '';
  codCategoSelecionado: string = '-1';
  priceSelecionado: string = '-1';
  quantitySelecionado: string = '-1';
  //fin filtrado
  //Ordenar por
  Order: string[] = ['Descendente', 'Ascendente'];
  seleccionado: string = 'Descendente';
  seleccionNum: number = 1;
  //-----

  productos :Product[]=[];
  lstcategorys: Category[] = [];

  //cantidades
  lstquantity:string[]=['5', '10','15','-1'];
  lstPrice:string[]=['10000', '20000','30000','50000','-1'];;
  quantityTemporal:string="";
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) {}

  public resolverFoto(foto: any) {
    const baseUrl = environment.baseUrl;
    return "'assets/1.jpg'";
    //return `${baseUrl}/foto_producto/${foto}`;
  }

  validarSeleccion() {
    switch (this.seleccionado) {
      case 'Descendente':
        this.seleccionNum = 1;
        break;
      case 'Ascendente':
        this.seleccionNum = 2;
        break;
      default:
        break;
    }
  }

  async ngOnInit() {
    //this.productos = await this.productService.SearchProduct("a");
    //problemas que la url cambia pero el filtrado no se corrige suscribiensoe a el parametro
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dato = params.get('search') || '';
      this.productService.SearchProduct(this.dato).subscribe((data) => {
        this.productos = data;
        //console.table(data);
      });
    });
    this.ConsultarCategory();
    console.log('----------' + this.lstcategorys);
  }

  async Filtrar() {
    this.productService
      .FilterProduct(
        this.dato,
        this.codCategoSelecionado,
        this.priceSelecionado,
        this.quantitySelecionado
      )
      .subscribe((data) => {
        this.productos = data;
        console.table(data);
      });
  }

  async ConsultarCategory() {
    this.categoryService.listCategories().subscribe((data) => {
      this.lstcategorys = data;
      console.table(data);
    });
  }

  public selecionarCategory(categoryCode: string) {
    console.log('Selecionar Categoria ' + categoryCode);
    this.codCategoSelecionado = categoryCode;
  }
  public selecionarPrice(priceSelecionado: string) {
    console.log('Selecionar Categoria ' + priceSelecionado);
    this.priceSelecionado = priceSelecionado;
  }

  public selecionarquantity(quantitySelecionado: string) {
    console.log('Selecionar Categoria ' + quantitySelecionado);
    this.quantitySelecionado = quantitySelecionado;
  }

  public equals(dato:any,dato2:any){
    return dato==dato2;
  }
}
