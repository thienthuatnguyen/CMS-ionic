import { Camera, CameraOptions } from "@ionic-native/camera";
import { Crop, CropOptions } from '@ionic-native/crop';
import { FileService } from "./file.service";
import { Injectable } from "@angular/core";
import { Utils } from "./util.service";

@Injectable()
export class CameraService {
    private MaxTargetWidth = 640; // maximum size is 300KB. don't change, to keep image size small
    private MaxTargetHeight = 640; // don't change, to keep image size small

    options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
    }
    constructor(
        private camera: Camera,
        private crop: Crop,
        private fileSvc: FileService,
        private utils: Utils
    ) {

    }
    /**
     * 
     * @param width expected resulting image width
     * @param height expected resulting image height
     * @param squareCrop use crop square area or not. Default crop with ratio 16:9
     */
    getPicture(width?: number, height?: number, squareCrop?: boolean): Promise<string> {
        return this.camera.getPicture(this.options).then(
            data => {
                if (this.utils.isAndroid()) {
                    data = 'file://' + data;
                }

                const opt: CropOptions = {
                    quality: 100,
                    heightRatio: 9,
                    widthRatio: 16,
                    targetWidth: width || this.MaxTargetWidth,
                    targetHeight: height || this.MaxTargetHeight
                }
                if (squareCrop) {
                    opt.heightRatio = 1;
                    opt.widthRatio = 1;
                }

                /*
                    NOTE: when npm install on new environment, please add widthRatio: number; and heightRatio: number; 
                    to interface CropOptions in node_modules@ionic-native\crop\index.d.ts
                */
                return this.crop.crop(data, opt).then(cropImg => { 
                    return this.fileSvc.readFileWithoutPath(cropImg).then(
                        base64 => {
                            if (this.utils.isIOS()){
                                this.camera.cleanup();
                            }
                            return base64;
                        },
                        error => {
                            if (this.utils.isIOS()){
                                this.camera.cleanup();
                            }
                            return Promise.reject(error);
                        }
                    );
                }) 
            },
            err => {
                return Promise.reject(err);
            }
        )
    }
    
}