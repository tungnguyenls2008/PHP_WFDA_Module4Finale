import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBookComponent } from './crud-base/home/home-book.component';
import { DetailsComponent } from './crud-base/details/details.component';
import { CreateComponent } from './crud-base/create/create.component';
import { UpdateComponent } from './crud-base/update/update.component';

const routes: Routes = [
  { path: 'books', component: HomeBookComponent },
  { path: 'books/:bookId/show', component: DetailsComponent },
  { path: 'books/create', component: CreateComponent },
  { path: 'books/:bookId/edit', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

