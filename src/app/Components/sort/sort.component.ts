import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  ratingCount: number;
  price: number;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})

export class SortComponent {
  panelOpenState=false;
  books: Book[] = [
    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    },

    {
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      imageUrl: 'https://example.com/book-cover.jpg',
      rating: 4.5,
      ratingCount: 20,
      price: 1500

    }
  ]

}
