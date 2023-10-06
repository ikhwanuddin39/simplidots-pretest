import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: NowPlayingComponent
  }
]

@NgModule({
  declarations: [
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTooltipModule
  ]
})
export class NowPlayingModule { }
