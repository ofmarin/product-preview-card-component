import { Component, HostListener, OnInit } from '@angular/core';
import { Cart } from '../cart/cart'

@Component({
  selector: 'app-card',
  imports: [Cart],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {
  ngOnInit() {
    this.chooseImage();
  }
  img: string = '';

  @HostListener('window:resize')
  onResize() {
    this.chooseImage();
  }
  chooseImage() {
    if (window.innerWidth < 750) {
      this.img = 'images/image-product-mobile.jpg';
    } else {
      this.img = 'images/image-product-desktop.jpg';
    }
  }
}
