import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { VersionResponseModel, VersionModel } from "../models/version.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class VersionService extends HttpAbstractService<VersionResponseModel, VersionResponseServerModel> {
    constructor(http: HttpClient, config: IvtHttpClientConfig, injector: UIHttpInjector) {
        super(http, config, '', VersionResponseModel, VersionResponseServerModel, injector);
    }
    search(versionModel: VersionModel): Observable<VersionResponseModel[]> {
        this.url = Config.api.CheckVersionForUpdates;
        return super.search( versionModel );
    }

}

export class VersionResponseServerModel extends ServerModel<VersionResponseModel> {
    private forceToUpdate: boolean;
    private latestVersionName: string;
    private storeUrl: string;
    toClientModel(): VersionResponseModel {
        const versionResponseModel = new VersionResponseModel();
        versionResponseModel.forceToUpdate = this.forceToUpdate;
        versionResponseModel.latestVersionName = this.latestVersionName;
        versionResponseModel.storeUrl = this.storeUrl;
        return versionResponseModel;
    }
}