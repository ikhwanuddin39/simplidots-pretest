import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService extends ApiService {
  public override endpoint = 'discover/movie';

}
