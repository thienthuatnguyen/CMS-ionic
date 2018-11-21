import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IvtHttpClientConfig } from '@ivt/http-client';
import { UserInfoModel } from '../models/userInfo.model';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app/app.config';
import { UIAwareHttpService } from './ui.aware.http.service';
import { UIHttpInjector } from './ui.http.injector';
@Injectable()
export class UserService extends UIAwareHttpService<any> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, '', UserInfoModel, config, injector);
    }

    signup(accountInfo: any) {
        this.url = Config.api.SignUp;
        return super.search(accountInfo);
    }

    getAllLocalizationsForApp(): Observable<any> {
        this.url = Config.api.GetAllLocalizationsForApp;
        return super.search({});
    }
    getAllPermissionsForApp(): Observable<any> {
        this.url = Config.api.GetAllPermissionsForApp;
        return super.search({});
    }
}
