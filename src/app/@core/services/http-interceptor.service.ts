import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, EMPTY, filter, map, Observable } from 'rxjs';
import { transformSnakeToCs } from '@core/util/snake.to.camelcase';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loSvc: LayoutService, private sb: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
        withCredentials: true,
      });
    } else {
      req = req.clone({
        withCredentials: true,
      });
    }

    return next.handle(req).pipe(
      filter((event: any) => event instanceof HttpResponse),
      map((event: HttpResponse<any>) => {
        let evt = event;
        if (event.headers.get('content-type') == 'application/json') {
          evt = event.clone({ body: transformSnakeToCs(event.body) });
        }
        return evt;
      }),
      catchError((error: HttpErrorResponse) => {
        this.loSvc.loader$.next(false);
        let message = 'There has been an issue with the server';

        if (error.error?.message) {
          message = error.error.message;
        } else if (error.status) {
          switch (error.status) {
            case 500:
              message = 'An Internal Server Error occurred';
              break;
          }
        } else {
          message = error.message;
        }

        this.sb.open(message, 'Close', {
          panelClass: ['snack-warning'],
          duration: 5000,
        });
        console.error(message);

        return EMPTY;
      })
    );
  }
}
