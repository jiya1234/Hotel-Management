import { Injectable } from '@angular/core';
import { AddHousekeeper } from './addhousekeepers';
import { PRODUCT_ITEMS } from './addhousekeepers-data';
//import { findIndex } from 'lodash';

@Injectable()
export class AddHousekeeperService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): AddHousekeeper[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: AddHousekeeper) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: AddHousekeeper) {
  //  let index = findIndex(this.pItems, (p: AddHousekeeper) => {
    let p: AddHousekeeper;
    return p.HousekeeperCNIC === product.HousekeeperCNIC; 
  }
    //});
    //this.pItems[index] = product;
  

  deleteProduct(product: AddHousekeeper) {
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
