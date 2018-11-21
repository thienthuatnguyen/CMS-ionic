import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class NotificationService
{
    updateBeforeVehicleHealthCheck = new Subject<boolean>();
    takeOdometerBeforeDrive = new Subject<boolean>();
    updateAfterVehicleHealthCheck = new Subject<boolean>();
    takeOdometerAfterDrive = new Subject<boolean>();
}