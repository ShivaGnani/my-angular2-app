import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './component.app';
import {ProductItemComponent} from './component.product-item';
import {ProductDetailsComponent} from './component.product-details';
import {AddProductComponent} from './component.add-product';

import {SearchPipe} from './pipe.search';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductItemComponent,
    ProductDetailsComponent, 
    SearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}