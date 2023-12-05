import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable, map } from "rxjs";


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

    constructor (private authService: OAuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.authService.getAccessToken();

        if (accessToken != null) {
            console.log("accessToken = ",accessToken)
            req = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
            });
          }

          return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  if (event.body && event.body.payload) {
                    event = event.clone({ body: event.body.payload });
                  } else {
                    event = event.clone({ body: event.body });
                  }
                }
                return event;
              })
          )
    }
}