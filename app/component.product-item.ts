import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-item',
    templateUrl: './partials/product-item.html',
    styleUrls: ["./css/product-item.css"]
})

export class ProductItemComponent {
    @Input() product;  
}