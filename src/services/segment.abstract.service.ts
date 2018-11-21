import { IvtHttpService, APIResponse, IvtHttpClientConfig, APICode } from '@ivt/http-client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app/app.config';
import { map, catchError } from 'rxjs/operators';
import { SegmentIf } from '../models/vehicle/segment.model';
import { Type } from '@ivt/http-client/module/service/base.service';

export class SegmentAbstractService<T extends SegmentIf> extends IvtHttpService<T> {
    private segmentType: string;
    constructor(http: HttpClient, url: string, private clazzT: Type<T>, config: IvtHttpClientConfig) {
        super(http, url, clazzT, config);
        this.segmentType = new clazzT().getType();
    }
    protected setParentID(item: T, parentID: string): T {
        const parent = new this.clazzT();
        parent.id = parentID;
        item.parent = parent;
        return item;
    }
    extractSegment(res: APIResponse, parentID: string): T | T[] {
        const itemOrItems = super.extractData(res);
        if (itemOrItems && parentID) {
            if (itemOrItems instanceof Array) {
                itemOrItems.forEach(item => {
                    this.setParentID(item, parentID);
                })
            } else {
                this.setParentID(itemOrItems, parentID);
            }
        }
        return itemOrItems;
    }
    search(parentID?: string): Observable<T[]> {
        this.url = Config.api.GetVehicleSegments;
        return this.httpClient.post<APIResponse>(this.url, {
            "segmentTypeEnum": this.segmentType,
            'parentSegmentId': parentID || null
        }).pipe(map(res => this.extractSegment(res, parentID))).pipe(catchError(err => this.handleError(err)));
    }
}
