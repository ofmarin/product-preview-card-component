import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from './card/card'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  attribution = "https://www.frontendmentor.io/profile/ofmarin"
  protected readonly title = signal('product-preview-card-component');
}
