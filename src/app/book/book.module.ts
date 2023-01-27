import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookComponent } from './book.component';
import { BookApiService } from './book-api.service';

@NgModule({
  declarations: [BookCardComponent, BookFilterPipe, BookComponent],
  providers: [BookApiService],
  imports: [CommonModule, HttpClientModule],
  exports: [BookComponent],
})
export class BookModule {}
