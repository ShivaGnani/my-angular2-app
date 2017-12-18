System.register(['@angular/core', './service.product-items'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_product_items_1;
    var AppComponent, Product;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_product_items_1_1) {
                service_product_items_1 = service_product_items_1_1;
            }],
        execute: function() {
            AppComponent = class AppComponent {
                /**
                 *
                 */
                constructor(productItemsService) {
                    this.productItemsService = productItemsService;
                }
                ngOnInit() {
                    this.products = this.productItemsService.get();
                }
                addNewProduct(newProduct) {
                    this.productItemsService.add(newProduct);
                }
                onProductClick(product) {
                    this.selectedProduct = product;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './partials/app.html',
                    styleUrls: ['./css/app.css']
                }), 
                __metadata('design:paramtypes', [service_product_items_1.ProductItemsService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            Product = class Product {
            };
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=component.app.js.map