import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService extends ApiService {
  public override endpoint = 'movie/now_playing';
}
