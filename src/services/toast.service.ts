import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class ToastService {
    constructor(protected toastCtrl: ToastController, private translateSvc: TranslateService) { }
    success(message: string): Promise<any> {
        return this.showMessage(message);
    }
    error(message: string): Promise<any> {
        return this.showMessage(message);
    }

    private showMessage(message: string): Promise<any> {
        return this.translateSvc.get(message).toPromise().then(localizedMsg => {
            this.toastCtrl.create({
                message: localizedMsg,
                duration: 3000
            }).present();
        })
    }
}