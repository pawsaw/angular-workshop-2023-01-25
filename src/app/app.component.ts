import { Component } from '@angular/core';
import { Book } from './book-card/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bookSearchTerm: string = '';

  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  updateBookSearchTerm(inputEvent: Event): void {
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value;
  }

  goToBook(book: Book): void {
    console.log({ book });
  }

  title = 'bookm';
}
