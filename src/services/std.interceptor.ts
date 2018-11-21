import { IvtHttpInterceptor, IvtHttpClientConfig } from "@ivt/http-client";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import {
    HttpInterceptor, HttpRequest, HttpHandler,
    HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpParams
} from '@angular/common/http';
import { LocalSettingModel } from "../models/config/local.setting.model";

 @Injectable()
export class STDClientInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        let clonedReq: any = null;
        clonedReq = req.clone({
            setParams:{
                "Abp.Localization.CultureName": LocalSettingModel.lang
            }
        });
        req = req.clone(clonedReq);
        return next.handle(req);
    }
}