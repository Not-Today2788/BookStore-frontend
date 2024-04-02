import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() book: any;
  // addToCart(book: Book) {
  //   console.log(`Adding ${book.title} to cart`);
  // }
}