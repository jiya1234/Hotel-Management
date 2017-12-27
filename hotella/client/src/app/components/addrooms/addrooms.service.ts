import { Injectable } from '@angular/core';
import { AddRooms } from './addrooms';
import { PRODUCT_ITEMS } from './addrooms-data';
//import { findIndex } from 'lodash';

@Injectable()
export class AddroomService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): AddRooms[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: AddRooms) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: AddRooms) {
    //let index = findIndex(this.pItems, (p: AddRooms) => {
    //  return p.RoomNo === product.RoomNo;
    //});
    //this.pItems[index] = product;
  }

  deleteProduct(product: AddRooms) {
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
