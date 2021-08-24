import { Component } from "@angular/core";

@Component({
    selector:'pm-product',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: String = 'Product List';
    productFilter: String = 'tom';
    imageHeight: number = 30;
    imageWidth: number = 60;
    showImage: boolean = false;
    showOrHide: String = 'Show';
    products: any[] = [
        {
            "productId" : 2,
            "productName" : "g cart",
            "productCode" : "GDN-01",
            "releaseDate" : "March 10 1202",
            "description" : "newdliada doisan",
            "price" : 12.32,
            "starRating" : 4.2,
            "imageUrl": "./assets/cheese .PNG"

        },
        {
            "productId" : 2,
            "productName" : "g cart",
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
}