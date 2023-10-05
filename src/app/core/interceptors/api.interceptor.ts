import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environtment";

@Injectable()
export class ApiInterceptor {
   //   constructor(private auth: AuthService) {}
   token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JkMjVkOTJmOGFkYjgyYjVlNjQwOTM0NzJiZTNjMSIsInN1YiI6IjY1MWU3ODY4ZWE4NGM3MDBjYTBhMzllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9qaDfkCcvYmznZC_IaWAiGXlOUn3u3llg9vJB1bk1M'
   intercept(
      req: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      const match = /^(\/(3).+)/;
      req = req.clone({
         url: req.url.replace(match, `${environment.host}$1`),

         setHeaders: {
            Authorization: `Bearer ${this.token}`,
         },
      });
      return next.handle(req);
   }
}
