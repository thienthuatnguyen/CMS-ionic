import { Vehicle } from "./vehicle/vehicle.model";
import { User, Tenant } from "@ivt/security";
import { Appointment } from "./appointment.model";
import { Consultant } from "./consultant.model";
import { Application } from "./application.model";
import { DriverLicense } from "./driver.license.model";
import { TermsAndConditions } from "./terms.conditions.model";
import { Signature } from "./signature.model";

export class Customer {
    id: string;
    tenant: Tenant;
    vehicle: Vehicle;
    salutation: string;
    fullName: string;
    phone: string;
    email: string;
    appointment: Appointment;
    consultant: Consultant;
    application: Application;
    driverLicense: DriverLicense;
    termsAndConditions: TermsAndConditions;
    signature: Signature;
    lastModificationTime: Date;
    creationTime: Date;
    driveStartTime: Date;
    driveEndTime: Date;
    creator: User;
}

export class SalutationEnum {
    static Mr = 'Mr.';
}