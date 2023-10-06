import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from 'src/app/core/api/movie-detail.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  pageTitle = 'Detail Movie'
  id: any;
  data: any
  constructor(
    private service: MovieDetailService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    console.log(this.id);

    this.service.getById(this.id).subscribe((res: any) => {
      console.log(res);
    })
  }
}
