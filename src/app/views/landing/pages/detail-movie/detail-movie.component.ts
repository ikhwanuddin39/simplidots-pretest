import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from 'src/app/core/api/movie-detail.service';
import { FavoritService } from 'src/app/core/services/favorit.service';

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
    private activatedRoute: ActivatedRoute,
    private favoriteService: FavoritService
  ) {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getById(this.id).subscribe((res: any) => {
      res.is_bookmark = this.favoriteService.isInFavorites(res.id) ? true : false;
      this.data = res;
    })
  }

  bookmark(data: any) {
    //add to localSTprage
    if (data?.is_bookmark) {
      data.is_bookmark = false;
      this.favoriteService.removeFromFavorites(data.id);
    } else {
      data.is_bookmark = true;
      this.favoriteService.addToFavorites(data);
    }
  }
}
