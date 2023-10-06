import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailMovieComponent
  }
]

@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailMovieModule { }
