import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
  category: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('category')) {
      this.category = this.activatedRoute.snapshot.paramMap.get('category')
      console.log(this.category);

    }
    // this.getMovie();
  }

  getMovie() {


    this.category = this.activatedRoute.snapshot.paramMap.get('category')
    console.log(this.category);
  }
}
