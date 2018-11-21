import { SegmentAbstractService } from "./segment.abstract.service";
import { VehicleTypeSegment, ModelYearSegment, TrimSegment } from "../models/vehicle/vehicle.segment.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IvtHttpClientConfig } from "@ivt/http-client";

@Injectable()
export class VehicleTypeService extends SegmentAbstractService<VehicleTypeSegment> {
    constructor(http: HttpClient, config: IvtHttpClientConfig) {
        super(http, '', VehicleTypeSegment, config);
    }
}

@Injectable()
export class ModelYearService extends SegmentAbstractService<ModelYearSegment> {
    constructor(http: HttpClient, config: IvtHttpClientConfig) {
        super(http, '', ModelYearSegment, config);
    }
}

@Injectable()
export class TrimService extends SegmentAbstractService<TrimSegment> {
    constructor(http: HttpClient, config: IvtHttpClientConfig) {
        super(http, '', TrimSegment, config);
    }
}