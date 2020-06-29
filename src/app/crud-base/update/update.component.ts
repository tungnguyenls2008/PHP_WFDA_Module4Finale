import { Component, OnInit } from '@angular/core';
import { Book } from '../../crud/book';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: number;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router,
              private crudService: CrudService) { }

  ngOnInit() {
    this.book = new class implements Book {
      author: string;
      description: string;
      id: number;
      title: string;
      updateBook(id: number, book: Book): any {
      }
    }();

    this.id = this.route.snapshot.params.id;

    this.crudService.getById(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));
  }

  updateBook() {
  }

  onSubmit() {
    this.updateBook();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}

export class UpdateComponent {
}
