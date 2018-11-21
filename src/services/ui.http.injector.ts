import { Injectable } from "@angular/core";
import { LoadingService } from "./loading.service";
import { DialogService } from "./dialog.service";
import { TranslateService } from "@ngx-translate/core";

/**
 * This class will provide necessary service for @UIAwareHttpService class
 */
@Injectable()
export class UIHttpInjector {
    constructor(
        public loadingService: LoadingService,
        public dialog: DialogService,
        public translateService: TranslateService
    ) {

    }
}