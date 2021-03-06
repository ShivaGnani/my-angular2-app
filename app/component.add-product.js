System.register(["@angular/core", "./component.app"], function(exports_1, context_1) {
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
    var core_1, component_app_1;
    var AddProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            }],
        execute: function() {
            AddProductComponent = class AddProductComponent {
                constructor() {
                    this.add = new core_1.EventEmitter();
                }
                addNewProduct() {
                    this.newProduct = new component_app_1.Product();
                    this.newProduct.ProductName = this.ProductName;
                    this.newProduct.CategoryName = this.CategoryName;
                    this.newProduct.QuantityPerUnit = this.QuantityPerUnit;
                    this.newProduct.UnitsInStock = this.UnitsInStock;
                    this.newProduct.Discontinued = false;
                    this.add.emit(this.newProduct);
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], AddProductComponent.prototype, "add", void 0);
            AddProductComponent = __decorate([
                core_1.Component({
                    selector: 'add-product',
                    templateUrl: './partials/add-product.html'
                }), 
                __metadata('design:paramtypes', [])
            ], AddProductComponent);
            exports_1("AddProductComponent", AddProductComponent);
        }
    }
});
//# sourceMappingURL=component.add-product.js.map