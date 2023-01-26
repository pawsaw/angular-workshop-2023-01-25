import { Component, Input } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  bookSearchTerm: string = '';

  @Input() url: string = 'localhost';

  books: Book[] = [];

  constructor(public readonly bookApi: BookApiService) {
    this.books = bookApi.all();
  }

  updateBookSearchTerm(inputEvent: Event): void {
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value;
  }

  goToBook(book: Book): void {
    console.log({ book });
  }
}
