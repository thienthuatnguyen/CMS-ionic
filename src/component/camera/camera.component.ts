import { Component, Input } from '@angular/core';
import { CameraService } from "../../services/camera.service";
import { FileService } from "../../services/file.service";
import { Picture } from "../../models/picture.model";
import { APIResponse, APICode } from "@ivt/http-client";
import { DomSanitizer } from "@angular/platform-browser";
import { AlertController, ModalController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { DriveShootingPage } from "../../pages/drive-shooting/drive-shooting"
import { ImageModal } from '../../pages/vehicle-health-check/imageModal/image-modal';

@Component({
    selector: 'ivt-camera',
    templateUrl: './camera.component.html'
})
export class CameraComponent {
    confirmWord: string;
    okWord: string;
    cancelWord: string;
    _frontPictures: Array<Picture> = [];
    _backPictures: Array<Picture> = [];

    @Input() noSpashScreen: boolean;

    @Input() 
    get frontPictures() {
        return this._frontPictures;
    };
    set frontPictures(val) {
        this._frontPictures = val;
    }
    @Input()
    get backPictures() {
        return this._backPictures;
    };
    set backPictures(val) {
        this._backPictures = val;
    }

    multiple = false;

    constructor(
        private camera: CameraService,
        private fileSvc: FileService,
        public domSanitizer: DomSanitizer,
        private alertCtrl: AlertController,
        private translate: TranslateService,
        private modalCtrl: ModalController
    ) {
        translate.get('DELETE_CAMERA_IMAGE').subscribe((value) => {
            this.confirmWord = value;
        })
        translate.get('OK_BUTTON').subscribe((value) => {
            this.okWord = value;
        })
        translate.get('CANCEL_BUTTON').subscribe((value) => {
            this.cancelWord = value;
        })
    }
    takePhoto(side: string) {
        if(this.noSpashScreen) {
            this.cameraGetPicture(side);
        }
        else {
            let profileModal = this.modalCtrl.create('DriveShootingPage', {
                pageType: side
            }, {
                cssClass: 'full-modal'
            });
    
            profileModal.onDidDismiss(data => {
                this.cameraGetPicture(side);
            });
            profileModal.present();    
        }
    }

    cameraGetPicture(side: string) {
        this.camera.getPicture().then(
            _base64 => this.storePhotos(side, _base64)
        )
    }

    storePhotos(side: string, base64: string): any {
        let picture = new Picture();
        picture.url = base64;
        if (side === 'front') {
            if (this.multiple === false) {
                this._frontPictures.splice(0, 1, picture);
            } else {
                this._frontPictures.push(picture)
            }
        } else if (side === 'back') {
            if (this.multiple === false) {
                this._backPictures.splice(0, 1, picture);
            } else {
                this._backPictures.push(picture);
            }
        }
    }
    upload(): Promise<CameraUploadResult> {
        return new Promise(
            (resolver, rejecter) => {
                let uploadRequests = [];
                let photos = this._frontPictures.concat(this._backPictures);
                photos.forEach(_picture => {
                    if (_picture.id == null) {
                        uploadRequests.push(this.fileSvc.upload(_picture.url, { fileName: this.generateUniqueFileName() }).then(
                            _id => _picture.id = _id
                        ))
                    }
                });
                // TODO: handle error
                Promise.all(uploadRequests).then(_ => {
                    resolver({
                        _frontPictures: this._frontPictures,
                        _backPictures: this._backPictures
                    });
                });
            }
        );
        ;

    }

    deletePhoto(side: string) {
        let item;
        if (side === 'front') {
            item = this._frontPictures[0];
        } else if (side === 'back') {
            item = this._backPictures[0];
        }

        let profileModal = this.modalCtrl.create('ImageModal', item, {
            cssClass: 'full-modal'
        });
        profileModal.onDidDismiss(data => {
        if (data) {
            if (side === 'front') {
                this._frontPictures.splice(0, this._frontPictures.length);
            } else if (side === 'back') {
                this._backPictures.splice(0, this._backPictures.length);
            }  
        }
        });
        profileModal.present();

        // let confirm = this.alertCtrl.create({
        //     title:  this.confirmWord,
        //     message: '',
        //     buttons: [
        //       {
        //         text: this.cancelWord,
        //         handler: () => {
        //         }
        //       }, {
        //         text: this.okWord,
        //         handler: () => {
        //             if (side === 'front') {
        //                 this._frontPictures.splice(0, this._frontPictures.length);
        //             } else if (side === 'back') {
        //                 this._backPictures.splice(0, this._backPictures.length);
        //             }  
        //         }
        //       }
        //     ]
        //   });
        //   confirm.present();
    }

    private generateUniqueFileName(): string {
        return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
    }
}

export interface CameraUploadResult {
    _frontPictures: Array<Picture>;
    _backPictures: Array<Picture>;
}