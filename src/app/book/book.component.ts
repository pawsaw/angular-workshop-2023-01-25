import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  bookSearchTerm: string = '';

  books: Book[] = [];
  private sub: Subscription = new Subscription();

  constructor(public readonly bookApi: BookApiService) {}

  ngOnInit(): void {
    this.sub.add(
      this.bookApi
        .all()
        .pipe(take(1))
        .subscribe((_books) => {
          this.books = _books;
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateBookSearchTerm(inputEvent: Event): void {
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value;
  }

  goToBook(book: Book): void {
    console.log({ book });
  }
}
