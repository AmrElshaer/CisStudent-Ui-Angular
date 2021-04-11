import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpParams,
  HttpUrlEncodingCodec
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CustomEncoder } from './CustomeEncoder';
export class EncodeHttpParamsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = new HttpParams({encoder: new CustomEncoder(), fromString: req.params.toString()});
    const httpUrlEncoding = new HttpUrlEncodingCodec();
    return next.handle(req.clone({
      params,
      url: httpUrlEncoding.encodeValue(req.url),
    }));
  }
}
