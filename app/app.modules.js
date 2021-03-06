System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './component.app', './component.product-item', './component.product-details', './component.add-product', './directive.product-favorite', './component.add-product-td-form', './component.add-product-md-form', './pipe.search', './service.product-items', './providers'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, forms_2, http_1, component_app_1, component_product_item_1, component_product_details_1, component_add_product_1, directive_product_favorite_1, component_add_product_td_form_1, component_add_product_md_form_1, pipe_search_1, service_product_items_1, providers_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
                forms_2 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (component_product_item_1_1) {
                component_product_item_1 = component_product_item_1_1;
            },
            function (component_product_details_1_1) {
                component_product_details_1 = component_product_details_1_1;
            },
            function (component_add_product_1_1) {
                component_add_product_1 = component_add_product_1_1;
            },
            function (directive_product_favorite_1_1) {
                directive_product_favorite_1 = directive_product_favorite_1_1;
            },
            function (component_add_product_td_form_1_1) {
                component_add_product_td_form_1 = component_add_product_td_form_1_1;
            },
            function (component_add_product_md_form_1_1) {
                component_add_product_md_form_1 = component_add_product_md_form_1_1;
            },
            function (pipe_search_1_1) {
                pipe_search_1 = pipe_search_1_1;
            },
            function (service_product_items_1_1) {
                service_product_items_1 = service_product_items_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        forms_2.ReactiveFormsModule,
                        http_1.HttpModule
                    ],
                    declarations: [
                        component_app_1.AppComponent,
                        component_add_product_1.AddProductComponent,
                        component_add_product_td_form_1.AddProductTemplateDrivenFormComponent,
                        component_add_product_md_form_1.AddProductModelDrivenFormComponent,
                        component_product_item_1.ProductItemComponent,
                        component_product_details_1.ProductDetailsComponent,
                        directive_product_favorite_1.ProductFavoriteDirective,
                        pipe_search_1.SearchPipe
                    ],
                    providers: [
                        service_product_items_1.ProductItemsService,
                        { provide: providers_1.CategoryListToken, useValue: providers_1.CategoryList }
                    ],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map