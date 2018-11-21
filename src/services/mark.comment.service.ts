
import { IvtHttpClientConfig } from "@ivt/http-client";
import { Mark, } from '../models/vehicle/mark.model';
import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Config } from "../app/app.config";
import { HttpAbstractService, ServerModel, ServerModelIf } from "./http.abstract.service";
import { AxisPosition } from '../models/position.model';
import { MarkAndComment, MarkModel } from "../models/vehicle/mark.comment.model";
import { VehicleHealthCheckModel, VhcCommentPhotosModel } from "../models/commentAndPhoto.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class VHCService extends HttpAbstractService<MarkAndComment, MarkAndCommentServer> {
    constructor(http: HttpClient, config: IvtHttpClientConfig, injector: UIHttpInjector) {
        super(http, config, '', MarkAndComment, MarkAndCommentServer, injector);
    }

    search(criteria?: any): Observable<MarkAndComment[]> {
        this.url = Config.api.GetVehicleHealthCheckDamagesAndCommentAndPhotos;
        return super.search(criteria);
    }
    save(vhc: any) {
        this.url = Config.api.CreateVehicleHealthCheckDamagesAndCommentAndPhotos;
        return super.save(vhc);
    }

    transformRequestBody(vhc: MarkAndCommentServer, vehicleId: string) {
        return {
            vehicleId: vehicleId,
            vhcDamages: vhc.vhcDamages,
            vhcComment: vhc.vhcComment
        }
    }
}
export class MarkAndCommentServer extends ServerModel<MarkAndComment> {
    private id: string;
    private vehicleId: number;
    vhcDamages: any[] = [];
    vhcDamVhcComments: VehicleHealthCheckModel[];
    vhcComment: VehicleHealthCheckModel;
    markModel: MarkModel;
    toClientModel(): MarkAndComment {
        const markComment = new MarkAndComment();
        markComment.mark = [];
        if (this.vhcDamVhcComments && this.vhcDamVhcComments.length > 0) {
            markComment.vhcComment = this.vhcDamVhcComments.pop();
            markComment.vhcCommentHistory = this.vhcDamVhcComments;
        }
        else {
            markComment.vhcComment = new VehicleHealthCheckModel();
            markComment.vhcCommentHistory = [];
        }
        this.vhcDamages.forEach((damage: any) => {
            const mark = new Mark();
            mark.id = this.id;
            mark.damageType = damage.damageTypeEnum;
            const axisPosition = new AxisPosition();
            axisPosition.XVal = damage.positionX;
            axisPosition.YVal = damage.positionY;
            mark.position = axisPosition;
            markComment.mark.push(mark);
        })
        return markComment;
    }
    fromClientModel(vhc: MarkAndComment) {
        vhc.mark.forEach((damage: Mark) => {
            let markModel = new MarkModel();
            markModel.damageTypeEnum = damage.damageType;
            markModel.positionX = damage.position.XVal;
            markModel.positionY = damage.position.YVal;
            this.vhcDamages.push(markModel);
        })
        this.vhcComment = new VehicleHealthCheckModel();
        this.vhcComment.vhcCommentPhotos = [];
        vhc.vhcComment.vhcCommentPhotos.forEach(photo => {
            let commentAndPhoto = new VhcCommentPhotosModel();
            commentAndPhoto.pictureId = photo.pictureId;
            commentAndPhoto.vhcCommentId = photo.vhcCommentId;
            commentAndPhoto.id = photo.id;
            this.vhcComment.vhcCommentPhotos.push(photo)
        })
        this.vhcComment.comment = vhc.vhcComment.comment;
        this.vehicleId = vhc.vehicleId;
    }
}