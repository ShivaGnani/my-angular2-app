System.register(["@angular/core", "@angular/forms", "./service.product-items", "./providers"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, forms_1, service_product_items_1, providers_1;
    var AddProductModelDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (service_product_items_1_1) {
                service_product_items_1 = service_product_items_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            }],
        execute: function() {
            AddProductModelDrivenFormComponent = class AddProductModelDrivenFormComponent {
                /**
                 *
                 */
                constructor(formBuilder, // Injecting built in service
                    productItemsService, // Injecting custom serivice
                    categoryList) {
                    this.formBuilder = formBuilder;
                    this.productItemsService = productItemsService;
                    this.categoryList = categoryList;
                } // Using Inject decorator
                ngOnInit() {
                    this.form = this.formBuilder.group({
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+') // Using built in validations
                        ])),
                        category: this.formBuilder.control('Condiments'),
                        quantity: this.formBuilder.control(''),
                        stock: this.formBuilder.control('', this.stockValidator)
                    });
                }
                // Custom Validate function 
                stockValidator(control) {
                    if (control.value.trim().length === 0) {
                        return null;
                    }
                    let iStock = parseInt(control.value.trim());
                    let minStock = 0;
                    let maxStock = 10000;
                    if (iStock >= minStock && iStock <= maxStock)
                        return null;
                    else {
                        return {
                            errorData: {
                                minStock: minStock,
                                maxStock: maxStock
                            }
                        };
                    }
                }
                onSubmit(newProduct) {
                    this.productItemsService.add(newProduct);
                    console.log('added');
                }
            };
            AddProductModelDrivenFormComponent = __decorate([
                core_1.Component({
                    selector: 'add-product-md-form',
                    templateUrl: './partials/add-product-md-form.html',
                    styleUrls: ['./css/add-product.css']
                }),
                // Injecting custom serivice
                __param(2, core_1.Inject(providers_1.CategoryListToken)), 
                __metadata('design:paramtypes', [forms_1.FormBuilder, service_product_items_1.ProductItemsService, Object])
            ], AddProductModelDrivenFormComponent);
            exports_1("AddProductModelDrivenFormComponent", AddProductModelDrivenFormComponent);
        }
    }
});
//# sourceMappingURL=component.add-product-md-form.js.map