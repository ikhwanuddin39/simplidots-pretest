import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './component/hero/hero.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NowPlayingComponent } from './component/now-playing/now-playing.component';
import { MatTooltipModule } from '@angular/material/tooltip';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
