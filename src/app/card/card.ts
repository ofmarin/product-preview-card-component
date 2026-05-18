import { Component } from '@angular/core';
import { Cart } from '../cart/cart'

@Component({
  selector: 'app-card',
  imports: [Cart],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {

   mainImg = "/images/image-product-mobile.jpg"
}

