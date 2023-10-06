import { Component, OnInit } from '@angular/core';
import { NowPlayingService } from 'src/app/core/api/now-playing.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  list: any
  pageTitle = 'Now Playing'

  constructor(
    private service: NowPlayingService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((res: any) => {
      console.log(res);
      this.list = res.results;
    })
  }
}
