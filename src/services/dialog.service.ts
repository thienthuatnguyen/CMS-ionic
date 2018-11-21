import { Injectable } from "@angular/core";
import { AlertController, Alert } from "ionic-angular";
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class DialogService {

    private readonly OK_BTN_KEY = 'OK_BUTTON';

    private readonly CANCEL_BTN_KEY = 'CANCEL_BUTTON';

    constructor(private alertCtrl: AlertController, private translate: TranslateService) {
        // should not translate in constructor. 
        // If translateService is not set to a specific language, the translated text will be not found
    }
    private getLocalization(key) {
        return this.translate.get(key).toPromise();
    }
    /**
     * Wrapping of Ionic AlertController. Return a promise which will be resolved when user click OK button
     */
    alert(title?: string, subTitle?: string): Promise<any> {

        let promise = new Promise(
            async (resolver, rejecter) => {
                let okBtnText = await this.getLocalization(this.OK_BTN_KEY);
                this.alertCtrl.create({
                    // title: title,
                    subTitle: title,
                    enableBackdropDismiss: false,
                    buttons: [{
                        text: okBtnText,
                        handler: () => {
                            resolver(true);
                        }
                    }]
                }).present();
            }
        );
        return promise;
    }
    async createConfirm(opts?: DialogOptions): Promise<Alert> {
        let okBtnText = await this.getLocalization(this.OK_BTN_KEY);
        let cancelBtnText = await this.getLocalization(this.CANCEL_BTN_KEY);
        let alert = this.alertCtrl.create({
            title: opts ? opts.title : null,
            subTitle: opts ? opts.subTitle : null,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: cancelBtnText,
                    handler: () => {
                        opts && opts.onConfirmed(false);
                    }
                },
                {
                    text: okBtnText,
                    handler: () => {
                        opts && opts.onConfirmed(true);
                    }
                }
            ]
        });
        return alert;
    }


    confirm(message: string): Promise<boolean> {

        let promise = new Promise<boolean>(
            async (resolver, rejecter) => {
                const okBtnText = await this.getLocalization(this.OK_BTN_KEY);
                const cancelBtnText = await this.getLocalization(this.CANCEL_BTN_KEY);
                this.alertCtrl.create({
                    // title: title,
                    subTitle: message,
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: okBtnText,
                            handler: () => {
                                resolver(true);
                            }
                        },
                        {
                            text: cancelBtnText,
                            handler: () => {
                                resolver(false);
                            }
                        }
                    ]
                }).present();
            }
        );
        return promise;
    }
}

export interface DialogOptions {
    title?: string;
    subTitle?: string;
    onConfirmed?: (isConfirmed: boolean) => void;
}