import { Injectable } from '@angular/core';
import { HTTPQuery } from '../interfaces/http-query';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  generateParams(query: HTTPQuery): HttpParams {
    const { page, limit, sort, language } = query;
    let params = new HttpParams();
    if (page) {
      params = params.append('page', page.toString());
    }
    if (limit) {
      params = params.append('limit', limit.toString());
    }
    if (sort) {
      params = params.append('sort', sort);
    }
    if (language) {
      params = params.append('language', language);
    }
    return params;
  }
}
