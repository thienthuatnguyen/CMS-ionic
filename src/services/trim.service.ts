import { SegmentAbstractService } from "./segment.abstract.service";
import { TrimSegment } from "../models/vehicle/vehicle.segment.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IvtHttpClientConfig } from "@ivt/http-client";

@Injectable()
export class ModelYearService extends SegmentAbstractService<TrimSegment> {
    constructor(http: HttpClient, config: IvtHttpClientConfig) {
        super(http, '', TrimSegment, config);
    }
    search(parentID?: string): Observable<TrimSegment[]> {
        const mock = [];
        for (let i = 0; i < 10; i++) {
            let segment = new TrimSegment();
            segment.id = i.toString();
            segment.name = 'Trim' + i;
            mock.push(segment);
        }
        return Observable.of(mock);
    }
}