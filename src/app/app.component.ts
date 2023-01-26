import { Component } from '@angular/core';
import { Book } from './book-card/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  book: Book = {
    title: 'My dummy book',
    abstract: 'Lorem ipsum',
    author: 'Pawel Sawicki',
  };

  goToBook(book: Book): void {
    console.log({ book });
  }

  title = 'bookm';
}
