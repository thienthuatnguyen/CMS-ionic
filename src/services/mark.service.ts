import { IvtHttpClientConfig } from "@ivt/http-client";
import { Mark } from '../models/vehicle/mark.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Config } from "../app/app.config";
import { HttpAbstractService, ServerModel, ServerModelIf } from "./http.abstract.service";
import { MarkArea } from '../models/vehicle/mark.area.model';
import { AxisPosition } from '../models/position.model';
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class MarkService extends HttpAbstractService<Mark, MarkServerModel> {
    constructor(http: HttpClient, config: IvtHttpClientConfig, injector: UIHttpInjector) {
        super(http, config, '', Mark, MarkServerModel, injector);
    }

    search(criteria?: any): Observable<Mark[]> {
        this.url = Config.api.GetVehicleHealthCheckDamages;
        return super.search(criteria);
    }

    saveAll(vhcDamages: Mark[], vehicleId: string) {
        this.url = Config.api.CreateOrUpdateVehicleHealthCheckDamages;
        return super.saveAll(vhcDamages, vehicleId);
    }

    transformRequestBody(vhcDamages: Array<MarkServerModel>, vehicleId: string) {
        return {
            vehicleId: vehicleId,
            vhcDamages: vhcDamages
        }
    }
}

export class MarkServerModel extends ServerModel<Mark> {
    private id: string;
    private damageTypeEnum: string;
    private positionX: number;
    private positionY: number;
    private marAreaId: string;
    private width: number;
    private height: number;

    toClientModel(): Mark {
        const mark = new Mark();
        mark.id = this.id;
        mark.damageType = this.damageTypeEnum;

        const axisPosition = new AxisPosition();
        axisPosition.XVal = this.positionX;
        axisPosition.YVal = this.positionY;
        mark.position = axisPosition;

        const area = new MarkArea();
        area.id = this.marAreaId;
        area.width = this.width;
        area.height = this.height;

        return mark;
    }
    fromClientModel(mark: Mark) {
        this.id = mark.id;
        this.damageTypeEnum = mark.damageType;
        this.positionX = mark.position.XVal;
        this.positionY = mark.position.YVal;
        // this.marAreaId = mark.area.id;
        // this.width = mark.area.width;
        // this.height = mark.area.height;
    }
}
