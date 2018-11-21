import { IvtHttpClientConfig } from "@ivt/http-client";
import { Config } from "../app/app.config";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReservationDocument } from "../models/reservation/reservation.model";
import { UIAwareHttpService } from "./ui.aware.http.service";
import { UIHttpInjector } from "./ui.http.injector";
@Injectable()
export class DocumentService extends UIAwareHttpService<any> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, '', ReservationDocument, config, injector);
    }
    save(document: ReservationDocument) {
        this.url = Config.api.CreateOrUpdateApplicationForApp;
        return super.save(document);
    }
}