import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritComponent } from './favorit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FavoritComponent
  }
]

@NgModule({
  declarations: [
    FavoritComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritModule { }
