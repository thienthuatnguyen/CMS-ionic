import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { AppSettingModel, SmartTestDriveSetting, Security, General } from "../models/config/app.setting.model";
import { UIHttpInjector } from "./ui.http.injector";
@Injectable()
export class AppSettingService extends HttpAbstractService<AppSettingModel, AppSettingModelServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', AppSettingModel, AppSettingModelServerModel, injector);
    }
    search(): Observable<AppSettingModel[]> {
        this.url = Config.api.GetAllSettingsForApp;
        return super.search();
    }

}

export class AppSettingModelServerModel extends ServerModel<AppSettingModel> {
    private general: General;
    private security: Security;
    private smartTestDriveSettings: SmartTestDriveSetting;
    toClientModel(): AppSettingModel {
        const appSettingModel = new AppSettingModel();
        appSettingModel.general = this.general;
        appSettingModel.security = this.security;
        appSettingModel.smartTestDriveSetting = this.smartTestDriveSettings;
        return appSettingModel;
    }
}