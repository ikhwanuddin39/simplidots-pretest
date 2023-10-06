import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NowPlayingService } from 'src/app/core/api/now-playing.service';
import { FavoritService } from 'src/app/core/services/favorit.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  list: any
  pageTitle = 'Now Playing'
  isBookmark: boolean = false;

  constructor(
    private service: NowPlayingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private favorite: FavoritService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getAll().subscribe((res: any) => {
      console.log(res);
      this.list = res.results;
    })
  }

  detail(id: any) {
    this.router.navigate(['detail'], {
      relativeTo: this.activatedRoute,
      queryParams: { id: id }
    });
  }

  bookmark(data: any) {
    //add to localSTprage
    this.favorite.addToFavorites(data);
  }

  unbookmark(id: any) {
    //remove from localstorage
    this.favorite.removeFromFavorites(id);
  }


  checkIsBookmark(id: any) {
    // this.isBookmark = this.favorite.isInFavorites(id);
    // console.log(this.isBookmark);

    // return this.isBookmark;

  }

}
