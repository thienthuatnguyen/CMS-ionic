import { TranslateService } from "@ngx-translate/core";
import { LoadingController, Loading } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class LoadingService {
    constructor(
        private translate: TranslateService,
        private loadingCtrl: LoadingController,
    ) {

    }

    async create(message: string): Promise<Loading> {
        let translated = await this.translate.get(message).toPromise();
        return this.loadingCtrl.create({
            content: translated
        });
    }
}