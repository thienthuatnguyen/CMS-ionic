import { VehicleTypeSegment, ModelYearSegment, TrimSegment } from "./vehicle.segment.model";
import { Tenant } from "@ivt/security";
import { Consultant } from "../consultant.model";
import { Customer } from "../customer.model";
import { Picture } from "../picture.model";
import { GPSLocation } from "../location.model";
import { IvtDevice } from "../device.model";

export class Vehicle {
    tenant: Tenant;
    pairedDevice: IvtDevice = new IvtDevice();
    // pairedDeviceId: string;
    // pairedDeviceDisplayName: string;
    // vehicleFrontSidePictureId: string;
    frontPicture: Picture;
    sidePicture: Picture;
    status: string;
    drivingStatus: string;
    initialMileage: number;
    drivenMileage: string;
    drivenDurationInSec: number;
    assignmentCount: number;
    location: GPSLocation = new GPSLocation();

    creationTime: any;
    id: string;
    vehicleType: VehicleTypeSegment;
    modelYear: ModelYearSegment;
    trim: TrimSegment;
    plateNo: string;
    displayName: string;
    customer: Customer;

    todayReservationCount: number; // consider to use Array<Reservation>

    isActive() {
        // API always return active Vehicles only
        return !this.isInActive() && !this.isRepairing();
    }
    isInActive() {
        return this.status === VehicleStatusEnum.Inactive;
    }
    isRepairing() {
        return this.status === VehicleStatusEnum.Repair;
    }
    isDrivingOnRoad() {
        return this.drivingStatus === VehicleDrivingStatusEnum.OnRoad;
    }
    isDrivingStop() {
        return this.drivingStatus === VehicleDrivingStatusEnum.Stop;
    }
}

/**
 * Typescript has limitation for Enum. So we use static field
 */
export class VehicleStatusEnum {
    static Active = 'Active';
    static Inactive = 'Inactive';
    static Repair = 'Repair';
}

export class VehicleDrivingStatusEnum {
    static OnRoad = 'OnRoad';
    static Stop = 'Stop';
}
