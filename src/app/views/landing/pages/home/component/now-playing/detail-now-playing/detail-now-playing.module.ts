import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNowPlayingComponent } from './detail-now-playing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailNowPlayingComponent
  }
]

@NgModule({
  declarations: [
    DetailNowPlayingComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ]
})
export class DetailNowPlayingModule { }
