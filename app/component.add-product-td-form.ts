import { Component } from "@angular/core";

@Component({
    selector: 'add-product-td-form',
    templateUrl: './partials/add-product-td-form.html'
})

export class AddProductTemplateDrivenFormComponent {
    onSubmit(newProduct) {
        console.log(newProduct);
    }
}
