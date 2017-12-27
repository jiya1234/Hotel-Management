import { Injectable } from '@angular/core';
import { FoodProduct } from './foodproduct';
import { PRODUCT_ITEMS } from './foodproduct-data';
//import { findIndex } from 'lodash';

@Injectable()
export class FoodProductService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): FoodProduct[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: FoodProduct) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: FoodProduct) {
  //  let index = findIndex(this.pItems, (p: FoodProduct) => {
    //  return p.Reservationid === product.Reservationid;
   // });
    //this.pItems[index] = product;
  }

  deleteProduct(product: FoodProduct) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }

}

  // getProductsFromService(): Product[] {
  //   return [{
  //   id: 1,
  //   name: 'Scissors',
  //   description: 'use this to cut stuff',
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Steak Knives',
  //   description: 'use this to eat food with',
  //   price: 10.99
  // }, {
  //   id: 3,
  //   name: 'Shot Glass',
  //   description: 'use this to take shots',
  //   price: 5.99
  // }]
  // }
