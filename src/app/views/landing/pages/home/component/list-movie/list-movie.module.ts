import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './list-movie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListMovieComponent
  }
]
@NgModule({
  declarations: [
    ListMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListMovieModule { }
