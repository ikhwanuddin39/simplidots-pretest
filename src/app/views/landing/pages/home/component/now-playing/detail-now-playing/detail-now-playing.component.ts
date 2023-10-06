import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from 'src/app/core/api/movie-detail.service';

@Component({
  selector: 'app-detail-now-playing',
  templateUrl: './detail-now-playing.component.html',
  styleUrls: ['./detail-now-playing.component.scss']
})
export class DetailNowPlayingComponent implements OnInit {
  id: any;
  data: any
  constructor(
    private service: MovieDetailService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
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
