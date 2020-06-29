import {Component, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  bookForm: FormGroup;

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    });
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ) {
  }

  submitForm() {
    this.crudService.create(this.bookForm.value).subscribe(res => {
      console.log('Book created!');
      this.router.navigateByUrl('/books'); }
    );

  }

}
