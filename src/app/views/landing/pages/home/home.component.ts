import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) { }

  changeRoutes(e: any) {
    this.router.navigate([e], { relativeTo: this.activetedRoute });
  }
}
