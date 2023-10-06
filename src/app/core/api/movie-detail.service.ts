import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService extends ApiService {
  public override endpoint = 'movie';
}
