import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";

import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";
import {CookieManagerService} from "../services/cookie/CookieManager.service";

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieServiceManager = inject(CookieManagerService);
  let router = inject(Router);
  if (cookieServiceManager.tokenExists()) {
    const token = cookieServiceManager.get();
    req = req.clone({
      headers: req.headers.set('Authorization', token)
    });
  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let code = error.error.code;
      if (code == 401) {
        router.navigateByUrl('/')
      }
      return throwError(() => error.error);
    })
  )
};
