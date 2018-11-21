import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { SurveyRating } from "../../../models/survey.model";
import { Storage } from '@ionic/storage';
import { IvtStorageService } from '@ivt/security';
import { Util } from "../../../providers";
import { SurveyQuestionService } from "../../../services/survey.question.service";
import { SurveyQuestion } from "../../../models/survey/survey.model";
import { SurveyResponseService } from "../../../services/survey.response.service";
import { Customer } from "../../../models/customer.model";
import { APIResponse } from "@ivt/http-client";
import { ToastService } from "../../../services/toast.service";
import { TranslateService } from '@ngx-translate/core';
import { MainPage, HomeTab } from "../..";

@IonicPage()
@Component({
  selector: 'ivt-survey-page',
  templateUrl: './survey.detail.component.html'
})
export class SurveyDetailPage {
  customer: Customer;
  customerName: any;
  appId: any;
  questions: Array<SurveyQuestion> = [];
  disableBack: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storageService: IvtStorageService,
    private alertCtrl: AlertController,
    private util: Util,
    public toastSvc: ToastService,
    private surveyQuestionSvc: SurveyQuestionService,
    private surveyResponseSvc: SurveyResponseService,
    private translateService: TranslateService
  ) {
    this.customer = this.navParams.get('customer') as Customer;
    this.customerName = this.customer.fullName;
    if (this.navParams.get('disableBack')){
      this.disableBack = this.navParams.get('disableBack');
    }
  }
  ionViewDidEnter() {
    this.getSurveyQuestion(this.customer.id);
  }
  getSurveyQuestion(applicationID: string) {
    this.surveyQuestionSvc.search(applicationID).subscribe(_questions => {
      this.questions = _questions;
    });

  }

  allQuestionAreAnswer() {
    return this.questions.every((q) => {
      return q.response.selectedScore != null
    })
  }

  cancel(item: any) {
    this.goBack();
  }

  private goBack() {
    if (this.navCtrl.length() === 1) {
      // there is not history before Survey page. Survey is accessed from Test Drive Page. We go back to Home page
      this.navCtrl.setRoot('ReservationListPage').then(res => {
        this.navCtrl.popToRoot().then(res => {
          this.navCtrl.parent.select(0);
        })
      });
    } else {
      this.navCtrl.pop();
    }
  }

  save() {
    let alert = this.alertCtrl.create({
      title: this.translateService.instant('msg.confirm_title'),
      message: this.translateService.instant('msg.are_you_sure_you_want_to_save'),
      buttons: [
        {
          text: this.translateService.instant('CANCEL_BUTTON'),
          handler: data => {
          }
        },
        {
          text: this.translateService.instant('SAVE_BUTTON'),
          handler: data => {
            let responses = this.questions.map(question => question.response)
            this.surveyResponseSvc.saveAll(responses, this.customer.id).subscribe(
              _data => {
                this.goBack();
              },
              (res: APIResponse) => {
                this.toastSvc.error(res.message);
              }
            );
          }
        }
      ]
    }).present();
  }
}
