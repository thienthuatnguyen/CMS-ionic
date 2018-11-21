import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DialogService } from "./dialog.service";
import { Alert } from "ionic-angular";

@Injectable()
export class ProgressService {
  constructor(
    private translate: TranslateService,
    private dialog: DialogService
  ) {

  }

  public async observe(stopWaiting: () => void, progressDone: Promise<any>, timeout: number) {
    let timeChecking;
    let confirmDialog: Alert;
    let isWaiting = false;
    let progressFinished = false;
    let msg = await this.translate.get('msg.it_take_too_much_time_keep_waiting').toPromise();
    let createConfirmDialog = () => {
      return this.dialog.createConfirm({
        subTitle: msg,
        onConfirmed: (_isConfirmed: boolean) => {
          // not waiting for geolocation
          isWaiting = _isConfirmed;
          if (!_isConfirmed) {
            if (timeChecking) {
              clearTimeout(timeChecking);
            }
            stopWaiting();
          }
        }
      });
    }
    let func = () => {
      timeChecking = setTimeout(async () => {
        if (!progressFinished) {
          confirmDialog = await createConfirmDialog();
        }
        if (!progressFinished && confirmDialog) {
          confirmDialog.present();
          confirmDialog.onDidDismiss((data: any) => {
            console.log('[ProgressService] observe: data..', data);
            confirmDialog = null;
            if (isWaiting && !progressFinished) {
              func()
            }
          });
        }
      }, timeout);
    }
    progressDone.then(
      _ => {
        progressFinished = true;
        if (timeChecking) {
          clearTimeout(timeChecking);
        }
        if (confirmDialog) {
          confirmDialog.dismiss();
        }
      }
    )
    confirmDialog = await createConfirmDialog();
    func();
  }

}