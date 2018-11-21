export class VehicleHealthCheckModel {
    id: string;
    comment: string;
    creatorUserId: string;
    creatorUserName: string;
    creationTime: string;
    vhcCommentPhotos: VhcCommentPhotosModel[] = [];
}

export class VhcCommentPhotosModel {
    id: string;
    vhcCommentId: string;
    pictureId: string;
}
