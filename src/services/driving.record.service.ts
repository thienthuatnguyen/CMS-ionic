import { IvtHttpService, IvtHttpClientConfig, APIResponse, APICode } from "@ivt/http-client";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../app/app.config";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { UIAwareHttpService } from "./ui.aware.http.service";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class DrivingRecordService extends UIAwareHttpService<DrivingRecord> {
    constructor(http: HttpClient, config: IvtHttpClientConfig, injector: UIHttpInjector) {
        super(http, '', DrivingRecord, config, injector);
    }
    startRecord(request: DrivingRecordRequest) {
        this.url = Config.api.StartDrivingRecord;
        return this.save(request);
    }
    continueRecord(request: DrivingRecordRequest) {
        this.url = Config.api.ContinueDrivingRecord;
        return this.save(request);
    }
    endRecord(request: DrivingEndRequest) {
        console.log('endRecord: ', request);
        this.url = Config.api.EndDrivingRecord;
        return this.save(request);
    }
    finishRecord(request: DrivingRecordRequest) {
        this.url = Config.api.FinishDrivingRecord;
        return this.save(request);
    }
    getFormattedAddress(params: GetAddressRequest) {
        return this.httpClient.post(Config.api.GetFormattedAddress, params).pipe(map(
            (res: APIResponse) => {
                if (res.code === APICode.Success) {
                    return res.data;
                } else {
                    console.error(res);
                    return '';
                }
            }
        )).pipe(catchError(
            err => {
                console.error(err);
                return '';
            }
        ))
    }
    createDrivingRawRecords(params: DrivingRawRecordsRequest) {
        this.url = Config.api.CreateDrivingRawRecords;
        return this.save(params, true, false);
    }
    search(criteria?: any): Observable<DrivingRecord[]> {
        this.url = Config.api.GetDrivingRecords;
        return super.search(criteria);
    }
}

export interface GetAddressRequest {
    latitude: number;
    longitude: number;
    language: string
}
export class DrivingEndRequest {
    id: string;
    applicationId: string;
    endLongitude: number;
    endLatitude: number;
    driveEndTime: string;
    drivenMileage: number;
    drivenDurationInSec: number;
}
export class DrivingRecord {
    static DrivingRecordStatusEnum = {
        Done: 'Done',
        OnRecord: 'OnRecord'
    }
    id: string;
    startLatitude: number;
    endLatitude: number;
    startLongitude: number;
    endLongitude: number;
    startFullAddress: string;
    endFullAddress: string;
    drivenMileage: number;
    drivenDurationInSec: number;
    drivingRecordStatusEnum: string;
}

export interface DrivingRecordRequest {
    applicationId: string;
    startLatitude: number;
    startLongitude: number;
    driveStartTime: string;
    pairedDeviceId?: string;
}

export interface DrivingRawRecordsRequest {
    drivingRecordId: string;
    drivenMileage: number;
    drivenDurationInSec: number;
    applicationId: string;
    drivingRawRecords: Array<DrivingLocation>
}

export interface DrivingLocation {
    latitude: number;
    longitude: number;
    accuracy: number;
    speed: number;
    heading: number;
    recordOrder: number;
    recordTime: string;
}