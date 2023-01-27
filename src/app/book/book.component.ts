import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, share, take } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  bookSearchTerm: string = '';

  books$: Observable<Book[]> = of([]);

  constructor(public readonly bookApi: BookApiService) {}

  ngOnInit(): void {
    this.books$ = this.bookApi.all().pipe(take(1), share());
  }

  ngOnDestroy(): void {}

  updateBookSearchTerm(inputEvent: Event): void {
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value;
  }

  goToBook(book: Book): void {
    console.log({ book });
  }
}
