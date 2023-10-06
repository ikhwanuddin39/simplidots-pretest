import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DiscoverService } from 'src/app/core/api/discover.service';
import { TrendingWeekService } from 'src/app/core/api/trending-week.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  discover: any;
  constructor(
    private service: DiscoverService
  ) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending() {
    this.service.getAll().subscribe((res: any) => {
      this.discover = res.results;
    })
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
  }
}
