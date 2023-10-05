import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { HTTPQuery } from '../interfaces/http-query';
import { HelpersService } from './helpers.service';


@Injectable({
   providedIn: 'root'
})
export class ApiService {

   public endpoint = '';
   baseUrl = '/3';
   helpers!: HelpersService
   // required service
   public readonly http = inject(HttpClient);

   url(): string {
      return [this.baseUrl, this.endpoint].join('/');
   }

   urlId(id: string | number): string {
      return `${this.endpoint}/${id}`;
   }
   // get semua data
   getAll(query?: HTTPQuery): Observable<any> {
      const url = this.url();
      const params = query ? this.helpers.generateParams(query) : {};
      return this.http.get<any>(url, { params });
   }
   // get data by id 
   getById(
      id: string | number,
      query?: HTTPQuery
   ): Observable<any> {
      const url = this.urlId(id);
      const params = query ? this.helpers.generateParams(query) : {};
      return this.http.get<any>(url, { params });
   }

}
