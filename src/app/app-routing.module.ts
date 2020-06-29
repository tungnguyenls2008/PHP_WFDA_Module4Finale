import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBookComponent } from './crud-base/home/home-book.component';
import { DetailsComponent } from './crud-base/details/details.component';
import { CreateComponent } from './crud-base/create/create.component';
import { UpdateComponent } from './crud-base/update/update.component';

const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud/home', component: HomeBookComponent },
  { path: 'crud/details/:bookId', component: DetailsComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update/:bookId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

