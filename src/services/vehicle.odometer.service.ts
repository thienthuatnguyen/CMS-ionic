import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { VehicleOdometerModel } from "../models/VehicleOdometer.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class VehicleOdometerService extends HttpAbstractService<VehicleOdometerModel, VehicleOdometerServerModel> {
    constructor(http: HttpClient, config: IvtHttpClientConfig, injector: UIHttpInjector) {
        super(http, config, '', VehicleOdometerModel, VehicleOdometerServerModel, injector);
    }
    save(vehicleOdometerModel: VehicleOdometerModel): Observable<VehicleOdometerModel> {
        this.url = Config.api.CreateVehicleOdometerForApp;
        return super.save(vehicleOdometerModel);
    }

}

export class VehicleOdometerServerModel extends ServerModel<VehicleOdometerModel> {
    applicationId: number;
    odometerPictureId: string;
    fromClientModel(vehicleOdometerResponse: VehicleOdometerModel) {
        this.applicationId = vehicleOdometerResponse.applicationId;
        this.odometerPictureId = vehicleOdometerResponse.odometerPictureId;
    }
}