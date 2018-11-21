import { MarkArea } from "./mark.area.model";
import { Expose } from "class-transformer";
import { AxisPosition } from "../position.model";
import { VehicleHealthCheckModel } from "../commentAndPhoto.model";
import { Mark } from "./mark.model";

export class MarkAndComment {
    vehicleId: number;
    mark : Mark[];
    vhcComment: VehicleHealthCheckModel;
    vhcCommentHistory: VehicleHealthCheckModel [] ;
}
export class MarkModel {
    damageTypeEnum: string;
    positionX: number;
    positionY: number;
}
