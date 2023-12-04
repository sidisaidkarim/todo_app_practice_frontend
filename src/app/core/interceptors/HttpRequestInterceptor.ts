import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable, map } from "rxjs";


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

    constructor (private authService: OAuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = "test_fake_token321f3sdf3sdf13sd21f"//this.authService.getAccessToken();

        console.log("interceptor executed")

        if (accessToken != null) {
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