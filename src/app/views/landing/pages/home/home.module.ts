import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './component/hero/hero.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})
export class HomeModule { }
