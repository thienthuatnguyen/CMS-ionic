import { IvtHttpClientConfig } from '@ivt/http-client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from '../app/app.config';
import { Vehicle } from '../models/vehicle/vehicle.model';
import { Utils } from './util.service';
import { VehicleTypeSegment, TrimSegment, ModelYearSegment } from '../models/vehicle/vehicle.segment.model';
import { Exclude } from 'class-transformer';
import { Tenant } from '@ivt/security';
import { HttpAbstractService, ServerModel } from './http.abstract.service';
import { Consultant } from '../models/consultant.model';
import { Customer } from '../models/customer.model';
import { Picture } from '../models/picture.model';
import { GPSLocation } from '../models/location.model';
import moment from 'moment';
import { IvtDevice } from '../models/device.model';
import { UIHttpInjector } from './ui.http.injector';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VehicleService extends HttpAbstractService<Vehicle, VehicleServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        private utils: Utils,
        injector: UIHttpInjector
    ) {
        super(http, config, '', Vehicle, VehicleServerModel, injector);
    }
    search(includeRepair: boolean = false): Observable<Vehicle[]> {
        this.url = Config.api.GetVehiclesForApp;
        return super.search({ includeVehiclesUnderRepair: includeRepair });
    }
    get(id: string): Observable<Vehicle> {
        return this.search().map(
            _list => {
                let vehicle = _list.find(_item => {
                    return _item.id === id;
                })
                return vehicle;
            }
        )
    }
    save(vehicle: Vehicle): Observable<Vehicle> {
        this.url = Config.api.CreateVehicleForApp;
        return super.save(vehicle);
    }
    transformEntity(serverModel: VehicleServerModel, vehicle: Vehicle): VehicleServerModel {
        if (this.utils.isAndroid()) {
            serverModel.setPairedDeviceIdOnAndroid(vehicle.pairedDevice.id);
        } else if (this.utils.isIOS()) {
            serverModel.setPairedDeviceIdOniOS(vehicle.pairedDevice.id);
        }
        return serverModel;
    }
    searchForHomePage(hiddenLoading?: any): Observable<Vehicle[]> {
        this.url = Config.api.GetVehiclesWithApplicationForApp;
        return super.search({ todayDateLocal: moment().locale(Config.moment.locale).format(Config.date.YYYYMMDD) }, hiddenLoading);
    }
}

export class VehicleServerModel extends ServerModel<Vehicle> {
    private id: string;
    private vehicleTypeSegmentId: string;
    private modelYearSegmentId: string;
    private trimSegmentId: string;
    private vehicleTypeDisplayName: string;
    private vehicleDisplayName: string;
    private modelYearDisplayName: string;
    private trimDisplayName: string;
    private licensePlateNo: string;
    private pairedDeviceDisplayName: string;
    private vehicleFrontSidePictureId: string;
    private vehicleSidePictureId: string;
    private initialMileage: number;
    private pairedDeviceIdOnAndroid: string;
    private pairedDeviceIdOniOS: string;
    private vehicleStatusEnum: string;
    private vehicleDrivingStatusEnum: string;

    private drivenDurationInSec: number;
    private tenantId: string;

    private consultantUserId: number;
    private consultantUserName: string;
    private consultantProfilePictureId: string;

    private customerFullName: string;

    private todayReservationCount: number;
    private drivenMileage: string;

    private currentFullAddress: string;


    fromClientModel(vehicle: Vehicle) {
        this.id = vehicle.id;
        this.vehicleDisplayName = vehicle.displayName;
        this.vehicleTypeSegmentId = vehicle.vehicleType ? vehicle.vehicleType.id : null;
        this.modelYearSegmentId = vehicle.modelYear ? vehicle.modelYear.id : null;
        this.trimSegmentId = vehicle.trim ? vehicle.trim.id : null;
        this.vehicleTypeDisplayName = vehicle.vehicleType ? vehicle.vehicleType.name : null;
        this.modelYearDisplayName = vehicle.modelYear ? vehicle.modelYear.name : null;
        this.trimDisplayName = vehicle.trim ? vehicle.trim.name : null;
        this.licensePlateNo = vehicle.plateNo;
        this.pairedDeviceDisplayName = vehicle.pairedDevice.name || vehicle.pairedDevice.address;
        this.vehicleFrontSidePictureId = vehicle.frontPicture ? vehicle.frontPicture.id : null;
        this.vehicleSidePictureId = vehicle.sidePicture ? vehicle.sidePicture.id : null;
        this.initialMileage = vehicle.initialMileage;
        this.vehicleStatusEnum = vehicle.status;
        this.vehicleDrivingStatusEnum = vehicle.drivingStatus;
        this.tenantId = vehicle.tenant ? vehicle.tenant.id : null;

        if (vehicle.customer) {
            this.consultantUserId = vehicle.customer.consultant.id
            this.consultantUserName = vehicle.customer.consultant.name
            this.consultantProfilePictureId = vehicle.customer.consultant.pictureID;
            this.customerFullName = vehicle.customer.fullName;
        }

        this.todayReservationCount = vehicle.todayReservationCount;

        this.drivenDurationInSec = vehicle.drivenDurationInSec;
        this.drivenMileage = vehicle.drivenMileage;

        if (vehicle.location) {
            this.currentFullAddress = vehicle.location.address;
        }
    }
    @Exclude()
    setPairedDeviceIdOnAndroid(pairedDeviceId: string) {
        this.pairedDeviceIdOnAndroid = pairedDeviceId;
    }
    @Exclude()
    setPairedDeviceIdOniOS(pairedDeviceId: string) {
        this.pairedDeviceIdOniOS = pairedDeviceId;
    }

    toClientModel(): Vehicle {
        const vehicle = new Vehicle();
        vehicle.id = this.id;
        vehicle.displayName = this.vehicleDisplayName;
        const vehicleTypeSegment = new VehicleTypeSegment();
        vehicleTypeSegment.id = this.vehicleTypeSegmentId;
        vehicleTypeSegment.name = this.vehicleTypeDisplayName;
        vehicle.vehicleType = vehicleTypeSegment;

        const trimSegment = new TrimSegment();
        trimSegment.id = this.trimSegmentId;
        trimSegment.name = this.trimDisplayName;
        vehicle.trim = trimSegment;

        const modelYearSegment = new ModelYearSegment();
        modelYearSegment.id = this.modelYearSegmentId;
        modelYearSegment.name = this.modelYearDisplayName;
        modelYearSegment.parent = vehicleTypeSegment;
        vehicle.modelYear = modelYearSegment;

        vehicle.plateNo = this.licensePlateNo;

        const frontPicture = new Picture();
        frontPicture.id = this.vehicleFrontSidePictureId;
        vehicle.frontPicture = frontPicture;

        const sidePicture = new Picture();
        sidePicture.id = this.vehicleSidePictureId;
        vehicle.sidePicture = sidePicture;

        vehicle.initialMileage = this.initialMileage;

        const pairedDevice = new IvtDevice();
        pairedDevice.id = this.pairedDeviceIdOnAndroid || this.pairedDeviceIdOniOS;
        pairedDevice.name = this.pairedDeviceDisplayName;

        vehicle.pairedDevice = pairedDevice;

        vehicle.status = this.vehicleStatusEnum;
        vehicle.drivingStatus = this.vehicleDrivingStatusEnum;

        const tenant = new Tenant();
        tenant.id = this.tenantId;
        vehicle.tenant = tenant;

        const consultant = new Consultant();
        consultant.id = this.consultantUserId;
        consultant.name = this.consultantUserName;
        consultant.pictureID = this.consultantProfilePictureId;

        const customer = new Customer();
        customer.fullName = this.customerFullName;
        customer.consultant = consultant;
        vehicle.customer = customer;

        vehicle.todayReservationCount = this.todayReservationCount;

        vehicle.drivenDurationInSec = this.drivenDurationInSec;
        vehicle.drivenMileage = this.drivenMileage;

        if (this.currentFullAddress) {
            const location = new GPSLocation();
            location.address = this.currentFullAddress;
            vehicle.location = location;
        }

        return vehicle;
    }
}

