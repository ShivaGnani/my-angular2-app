System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ProductFavoriteDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductFavoriteDirective = class ProductFavoriteDirective {
                constructor() {
                    this.isFavorite = true;
                    this.isHovered = false;
                }
                OnMouseEnter() {
                    this.isHovered = true;
                }
                onMouseLeave() {
                    this.isHovered = false;
                }
                set productFavorite(value) {
                    this.isFavorite = value;
                }
            };
            __decorate([
                core_1.HostBinding('class.item-favorite'), 
                __metadata('design:type', Object)
            ], ProductFavoriteDirective.prototype, "isFavorite", void 0);
            __decorate([
                core_1.HostBinding('class.item-favorite-hover'), 
                __metadata('design:type', Object)
            ], ProductFavoriteDirective.prototype, "isHovered", void 0);
            __decorate([
                core_1.HostListener('mouseenter'), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], ProductFavoriteDirective.prototype, "OnMouseEnter", null);
            __decorate([
                core_1.HostListener('mouseleave'), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], ProductFavoriteDirective.prototype, "onMouseLeave", null);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object), 
                __metadata('design:paramtypes', [Object])
            ], ProductFavoriteDirective.prototype, "productFavorite", null);
            ProductFavoriteDirective = __decorate([
                core_1.Directive({
                    selector: '[productFavorite]'
                }), 
                __metadata('design:paramtypes', [])
            ], ProductFavoriteDirective);
            exports_1("ProductFavoriteDirective", ProductFavoriteDirective);
        }
    }
});
//# sourceMappingURL=directive.product-favorite.js.map