import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './component.app';
import { ProductItemComponent } from './component.product-item';
import { ProductDetailsComponent } from './component.product-details';
import { AddProductComponent } from './component.add-product';
import { ProductFavoriteDirective } from './directive.product-favorite'
import { AddProductTemplateDrivenFormComponent } from './component.add-product-td-form'
import { AddProductModelDrivenFormComponent } from './component.add-product-md-form'

import { SearchPipe } from './pipe.search';
import { EINPROGRESS } from 'constants';

import { ProductItemsService } from './service.product-items';
import { CategoryListToken, CategoryList } from './providers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AddProductComponent,
    AddProductTemplateDrivenFormComponent,
    AddProductModelDrivenFormComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductFavoriteDirective,
    SearchPipe
  ],
  providers: [
    ProductItemsService,
    { provide: CategoryListToken, useValue: CategoryList }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }