import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

@Injectable()
export class RequestHandlerInterceptor implements HttpInterceptor {

    constructor() { }

    /* Intercept the request and response */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*In case we got HTTP error we will handle here and possibly inform user with soft warnings */
        return next.handle(req).do((event: HttpEvent<any>) => { }, (response: any) => {
            if (response instanceof HttpErrorResponse) {
                /*TODO in future we could use some screen pops error message eg. snackbar */
                console.log('Error' + response.message);
            }
        });
    }
}
