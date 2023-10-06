import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FavoritService } from 'src/app/core/services/favorit.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent implements OnInit {

  pageTitle = 'Favorit';
  list: any

  constructor(
    private service: FavoritService,
    private roter: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getFavorit();
  }

  getFavorit() {
    this.list = this.service.getFavorites();
    console.log(this.list);
  }

  detail(id: any) {
    this.roter.navigate(['../detail'], {
      relativeTo: this.activatedRoute,
      queryParams: { id }
    })
  }


  bookmark(data: any) {
    //add to localSTprage
    if (data?.is_bookmark) {
      data.is_bookmark = false;
      this.service.removeFromFavorites(data.id);
    } else {
      data.is_bookmark = true;
      this.service.addToFavorites(data);
    }
    this.getFavorit()
  }
}
