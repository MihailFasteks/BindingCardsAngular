import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css'],
  standalone:true
})
export class CardBlockComponent {
  @Input() product: any;
  @Input() selected: boolean = false; 
  @Output() selectProduct = new EventEmitter<any>();

  onButtonClick() {
    this.selectProduct.emit(this.product);
  }
}