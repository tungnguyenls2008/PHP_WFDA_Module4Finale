import { Component, OnInit } from '@angular/core';
import { Book } from '../../crud/book';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-book',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  book: Book;
  bookForm: FormGroup;

  constructor(private route: ActivatedRoute, private crudService: CrudService, private navigate: Router) {
  }

  ngOnInit() {
  }

  onSubmit(bookF: Book) {
    this.crudService.update(this.id, bookF)
      .subscribe( () => {
        this.navigate.navigate(['/books']);
      });
  }


}

