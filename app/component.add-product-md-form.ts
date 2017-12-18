import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProductItemsService } from "./service.product-items";
import { CategoryListToken } from "./providers";
@Component({
    selector: 'add-product-md-form',
    templateUrl: './partials/add-product-md-form.html',
    styleUrls: ['./css/add-product.css']
})

export class AddProductModelDrivenFormComponent {
    form;

    /**
     *
     */
    constructor(private formBuilder: FormBuilder, // Injecting built in service
        private productItemsService: ProductItemsService, // Injecting custom serivice
        @Inject(CategoryListToken) public categoryList) { } // Using Inject decorator

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+') // Using built in validations
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
}
