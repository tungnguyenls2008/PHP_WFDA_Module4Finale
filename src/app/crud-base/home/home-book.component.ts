import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {Book} from '../../crud/book';



@Component({
  selector: 'app-home',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.css']
})
export class HomeBookComponent implements OnInit {

  books: Book[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
    });
  }

}
