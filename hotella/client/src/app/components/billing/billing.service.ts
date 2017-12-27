import { Injectable } from '@angular/core';
import { Billing } from './billing';
import { PRODUCT_ITEMS } from './billing-data';
//import { findIndex } from 'lodash';

@Injectable()
export class BillingService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): Billing[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: Billing) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: Billing) {
  //  let index = findIndex(this.pItems, (p: Billing) => {
    //  return p.CardNo === product.CardNo;
    //});
    //this.pItems[index] = product;
  }

  deleteProduct(product: Billing) {
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
