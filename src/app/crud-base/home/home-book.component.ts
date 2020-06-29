import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {Book} from '../../crud/book';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.css']
})
export class HomeBookComponent implements OnInit {

  books: Book[] = [];
  book: Book;

  constructor(public crudService: CrudService, private router: Router) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
    });
  }
  delete(id){
    this.crudService.getById(id).subscribe(res => {this.book = res; });
    this.crudService.delete(id).subscribe(res => {
      console.log('Book deleted!');
      // this.router.navigateByUrl('/books');
      this.books = this.books.filter(
        p => p.id !== this.book.id
      );
    });
  }

}
