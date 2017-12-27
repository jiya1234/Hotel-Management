import { Component, OnInit } from '@angular/core';
import { FoodProductService } from './foodproduct.service';
import { FoodProduct } from './foodproduct';
//import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'foodproduct.template.html'
})

export class FoodProductComponent implements OnInit {
  date: Date;
  products: FoodProduct[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private _productService: FoodProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this._productService.getProductsFromData();
  }

  showEditProductForm(product: FoodProduct) {
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

  saveProduct(product: FoodProduct) {
    if(this.isNewForm) {
      // add a new product
      this._productService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: FoodProduct) {
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
