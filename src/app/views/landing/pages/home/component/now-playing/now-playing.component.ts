import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NowPlayingService } from 'src/app/core/api/now-playing.service';
import { FavoritService } from 'src/app/core/services/favorit.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  list: any[] = []
  pageTitle = 'Now Playing'
  isBookmark: boolean = false;
  currentPage: number = 1;
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.service.getAll({ page: this.currentPage }).subscribe((res: any) => {
      console.log(res);
      const newResults = res.results.map((item: any) => {
        return {
          ...item,
          is_bookmark: this.favorite.isInFavorites(item.id) ? true : false
        }
      })
      this.list = this.list.concat(newResults);
      this.currentPage = res.page + 1;
      this.isLoading = false;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollHeight = document.documentElement.scrollHeight - 50;
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    console.log(this.isLoading);

    // Periksa apakah pengguna telah mencapai batas paling bawah halaman
    if (scrollTop + clientHeight >= scrollHeight && !this.isLoading) {
      this.getData();
    }
  }

  detail(id: any) {
    this.router.navigate(['../detail'], {
      relativeTo: this.activatedRoute,
      queryParams: { id: id }
    });
  }

  bookmark(data: any) {
    //add to localSTprage
    if (data?.is_bookmark) {
      data.is_bookmark = false;
      this.favorite.removeFromFavorites(data.id);
    } else {
      data.is_bookmark = true;
      this.favorite.addToFavorites(data);
    }
  }

}
