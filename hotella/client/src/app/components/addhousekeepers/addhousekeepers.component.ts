import { Component, OnInit } from '@angular/core';
import { AddHousekeeperService } from './addhousekeepers.service';
import { AddHousekeeper } from './addhousekeepers';
//import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'addhousekeepers.template.html'
})

export class AddHousekeeperComponent implements OnInit {

  products: AddHousekeeper[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private _productService: AddHousekeeperService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this._productService.getProductsFromData();
  }

  showEditProductForm(product: AddHousekeeper) {
    if(!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
  //  this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: AddHousekeeper) {
    if(this.isNewForm) {
      // add a new product
      this._productService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: AddHousekeeper) {
    this._productService.deleteProduct(product);
  }

  updateProduct() {
    this._productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

}
