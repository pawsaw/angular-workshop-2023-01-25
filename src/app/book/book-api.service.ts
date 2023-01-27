import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookApiService {
  constructor(private _http: HttpClient) {}

  all(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:4730/books');
  }
}
