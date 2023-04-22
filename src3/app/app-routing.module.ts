import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

const routes: Routes = [
  {path : 'Technologies', component:TechnologiesComponent},
  {path : 'Books' ,component:BooksComponent},
  //Add on default path
  { path: '', component:TechnologiesComponent},
  // It is our Widcard component
  {path : '**', component:InvalidpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
