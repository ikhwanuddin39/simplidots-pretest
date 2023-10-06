import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TrendingWeekService extends ApiService {

  public override endpoint = 'trending/movie/week';
}
