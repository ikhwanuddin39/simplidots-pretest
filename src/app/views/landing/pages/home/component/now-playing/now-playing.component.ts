import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: NowPlayingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
}
