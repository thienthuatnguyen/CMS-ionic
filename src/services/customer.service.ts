import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Vehicle } from "../models/vehicle/vehicle.model";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { ServeyItem } from "../models/survey.model";
import { LoadingController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import moment from 'moment';
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class CustomerService extends HttpAbstractService<Customer, CustomerServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', Customer, CustomerServerModel, injector);
    }
    search(searchCriteria: any): Observable<Customer[]> {
        this.url = Config.api.GetApplicationsSurveyUndoneWithDrivingRecord;
        searchCriteria.baseDateFromLocal = moment(searchCriteria.baseDateFromLocal).locale(Config.moment.locale).format(Config.date.YYYYMMDD);
        return super.search(searchCriteria);
    }

}

export class CustomerServerModel extends ServerModel<Customer> {
    private vehicleId: string;
    private customerFullName: string;
    private driveStartTime: Date;
    private driveEndTime: Date;
    private id: string;


    fromClientModel(customer: Customer) {
        this.vehicleId = customer.vehicle.id;
    }
    toClientModel(): Customer {
        const customer = new Customer();
        if (this.vehicleId) {
            const vehicle = new Vehicle();
            vehicle.id = this.vehicleId;
            customer.id = this.id;
            customer.driveEndTime = this.driveEndTime;
            customer.driveStartTime = this.driveStartTime;
            customer.vehicle = vehicle;
            customer.fullName = this.customerFullName;
        }
        return customer;
    }
}