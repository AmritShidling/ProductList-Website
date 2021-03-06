import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
@Component({
    selector:'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: String = 'Product List';
    // productFilter: String = 'tom';
    private _productFilter: string = '';
    get productFilter() : string{
        return this._productFilter;
    }
    set productFilter(value : string){
        this._productFilter = value;
        this.filteredProductList = this.filterList(value);
    }
    filteredProductList: IProduct[] = [];
    imageHeight: number = 30;
    imageWidth: number = 60;
    showImage: boolean = false;
    showOrHide: String = 'Show';
    products: IProduct[] = [
        {
            "productId" : 2,
            "productName" : "cheese",
            "productCode" : "GDN-01",
            "releaseDate" : "March 10 1202",
            "description" : "newdliada doisan",
            "price" : 12.32,
            "starRating" : 4.2,
            "imageUrl": "./assets/cheese .PNG"

        },
        {
            "productId" : 2,
            "productName" : "tomato",
            "productCode" : "GDN-01",
            "releaseDate" : "March 10 2202",
            "description" : "newdliada doisan",
            "price" : 1.32,
            "starRating" : 4.2,
            "imageUrl": "./assets/tomato.jpg"

        }
    ];
    togleImage() : void{
        this.showImage =! this.showImage;
    }
    ngOnInit(){
        this._productFilter = '';
        this.filteredProductList = this.products
    }
    filterList(filter : string): IProduct[]{
        filter = filter.toLocaleLowerCase();
        // return this.products;
        console.log("filter " +filter);
        return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().includes(filter)
        );
    }
}