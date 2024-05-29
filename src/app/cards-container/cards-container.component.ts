import { Component } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, NgFor, NgIf],
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {
  products = [
    {id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: '#005b7c'},
    {id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: '#008eab'},
    {id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: '#01bcc6'},
  ];
color:any=null;
  selectedProduct: any = null;

  onSelect(product: any) {
    this.selectedProduct = product;
  }

  applyDiscount() {
    this.products.forEach(product => {
      product.price -= 15;
    });
    console.log(this.products);
  }
}