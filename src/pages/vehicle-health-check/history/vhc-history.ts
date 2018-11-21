import { FileService } from "../../../services/file.service";
import { NavParams, ViewController, IonicPage, LoadingController } from "ionic-angular";
import { VhcCommentPhotosModel, VehicleHealthCheckModel } from "../../../models/commentAndPhoto.model";
import { Picture } from "../../../models/picture.model";
import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Config } from "../../../app/app.config";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IvtStorageService } from '@ivt/security';
import { LocalSettingModel } from "../../../models/config/local.setting.model";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../../../services/language.service";

@IonicPage()
@Component({
    selector: 'vhc-history',
    templateUrl: 'vhc-history.html'
})

export class HistoryDetailPage {
    @ViewChild(Slides) slides: Slides;
    history: VehicleHealthCheckModel;
    Pictures: Picture[] = [];
    displayDateFormat = Config.date.displayFormatDateSurvey;
    direction: string;
    constructor(private fileSvc: FileService, private params: NavParams,
         public viewCtrl: ViewController, public domSanitizer: DomSanitizer, 
         private loadingCtrl: LoadingController, private translate: TranslateService, 
         private languageService: LanguageService   
        ) {
        this.history = this.params.data.item as VehicleHealthCheckModel;        
        this.downloadPhoto(this.history.vhcCommentPhotos);
        this.languageService.onDirectionChanged(
            (isRTL) => {
              if (isRTL) {
                this.direction = Config.direction.rtl;
              }
              else {
                this.direction = Config.direction.ltr;
              }
            }
          )
        
    }

    private async downloadPhoto(vhcCommentPhotos: VhcCommentPhotosModel[]) {
        let _list = [];
        if (this.history.vhcCommentPhotos && this.history.vhcCommentPhotos.length>0) {
            let loadingMsg = await this.translate.get('msg.loading').toPromise();
            let loading = this.loadingCtrl.create({
                content: loadingMsg
            });
          
            loading.present();

            for (let item of vhcCommentPhotos) {
                await this.fileSvc.download(item.pictureId).then(result => {
                    _list.push({ id: item.pictureId, url: result })
                })
            }

            for (let item of vhcCommentPhotos) {
                let temp = _list.find(_photo => {
                    return _photo.id == item.pictureId
                });
                this.Pictures.push(temp);
            }
            loading.dismiss();

        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    next() {
         this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
}