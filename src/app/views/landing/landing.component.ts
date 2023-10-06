import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { MovieService } from 'src/app/core/api/trending/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: any
  constructor(
    public service: MovieService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((res: any) => {
      this.data = res.results;
    })
  }
}
