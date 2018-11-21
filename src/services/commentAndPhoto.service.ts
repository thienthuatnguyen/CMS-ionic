import { IvtHttpClientConfig } from "@ivt/http-client";
import { VehicleHealthCheckModel, VhcCommentPhotosModel } from '../models/commentAndPhoto.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Config } from "../app/app.config";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class VehcileHealthCheckService extends HttpAbstractService<VehicleHealthCheckModel, VehicleHealthCheckServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', VehicleHealthCheckModel, VehicleHealthCheckServerModel, injector);
    }

    get(criteria?: any): Observable<VehicleHealthCheckModel> {
        this.url = Config.api.GetVehicleHealthCheckCommentAndPhotos;
        return super.get(criteria);
    }
}

export class VehicleHealthCheckServerModel extends ServerModel<VehicleHealthCheckModel> {
    private id: string;
    private comment: string;
    private creatorUserId: string;
    private creatorUserName: string;
    private creationTime: string;
    private vhcCommentPhtos: any[]

    toClientModel(): VehicleHealthCheckModel {
        const vhc = new VehicleHealthCheckModel();
        vhc.id = this.id;
        vhc.comment = this.comment;
        vhc.creatorUserId = this.creatorUserId;
        vhc.creatorUserName = this.creatorUserName;
        vhc.creationTime = this.creationTime;


        this.vhcCommentPhtos.forEach((value: any) => {
            const photos = new VhcCommentPhotosModel();
            photos.id = value.id;
            photos.vhcCommentId = value.vhcCommentId;
            photos.pictureId = value.pictureId;
            vhc.vhcCommentPhotos.push(photos);
        })

        return vhc;
    }
    fromClientModel(vhc: VehicleHealthCheckModel) {
        this.id = vhc.id;
        this.comment = vhc.comment;
        this.creatorUserId = vhc.creatorUserId;
        this.creatorUserName = vhc.creatorUserName;
        this.creationTime = vhc.creationTime;
        this.vhcCommentPhtos = vhc.vhcCommentPhotos;
    }
}
