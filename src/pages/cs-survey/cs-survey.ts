import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SurveyDetailPage } from './survey-detail/survey.detail.component';
import { ServeyItem } from '../../models/survey.model';
import { Item } from '../../models/item';
import moment from 'moment';
import { Config } from '../../app/app.config';
import { CustomerService } from '../../services/customer.service';
import { VehicleService } from '../../services/vehicle.service';
import { Customer } from '../../models/customer.model';

/**
 * Generated class for the CsSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cs-survey',
  templateUrl: 'cs-survey.html',
})
export class CsSurveyPage {
  displayDateFormat = Config.date.displayFormatDateSurvey;
  undoneSurveyCustomers: any = [];
  private params: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    protected customerService: CustomerService, protected vehicleService: VehicleService
  ) { }
  ionViewDidEnter() {
    this.getUndoneSurveyCustomers();
  }

  openSurvey(customer: Customer) {
    this.navCtrl.push('SurveyDetailPage', {
      customer: customer
    });
  }
  getUndoneSurveyCustomers() {
    this.params = {
      baseDateFromLocal: moment()
    }
    this.customerService.search(this.params).subscribe(res => {
      this.undoneSurveyCustomers = res;
      this.vehicleService.search().subscribe(
        _vehicles => {
          this.undoneSurveyCustomers.forEach(_customer => {
            _customer.vehicle = _vehicles.find(_item => _item.id === _customer.vehicle.id) || _customer.vehicle
          });
        }
      )

    });
  }

}
