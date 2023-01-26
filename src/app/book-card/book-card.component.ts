import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: Book | null = null;
  @Output() bookClicked = new EventEmitter<Book>();

  constructor() {}

  detailsClicked(event: MouseEvent): void {
    event.preventDefault();
    if (this.content) {
      this.bookClicked.emit(this.content);
    }
  }

  ngOnInit(): void {}
}
