import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Platform } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { VehicleOnRoad, VehicleWaitting } from '../../models/vehicleInfo';
import { IvtStorageService } from '@ivt/security';
import { Vehicle } from '../../models/vehicle/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { APIResponse } from '@ivt/http-client';
import { ToastService } from '../../services/toast.service';
import { FileService } from '../../services/file.service';
import { FileEntry } from '@ionic-native/file';
import { FileUploadResult } from '@ionic-native/file-transfer';
import { DomSanitizer } from '@angular/platform-browser';
import { DeveloperService } from '../../services/developer.service';
import { LocalSettingModel } from '../../models/config/local.setting.model';
import { LanguageService } from '../../services/language.service';
import { Config } from '../../app/app.config';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  imageUrl: string;
  vehicles: Array<Vehicle> = [];
  vehiclesOnRoad: Array<Vehicle> = [];
  vehiclesWaiting: Array<Vehicle> = [];
  reminderTotal: any = 5;
  syncedTime = new Date();
  vehiclesTotal: number;
  loadingMsg: string;
   count : number = 0;
   direction: string;

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    private vehicleSvc: VehicleService,
    private toastSvc: ToastService,
    private fileSvc: FileService,
    public domSanitizer: DomSanitizer,
    public developerService: DeveloperService,
    private languageService: LanguageService
  ) {
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

  ionViewDidEnter () {
    this.loadData();
    window.open("itms-services://?action=download-manifest&url=https://testdrive-stable.hyundaisvc.com:9443/Packages/manifest.plist");
  }
  loadData() {
    this.vehicleSvc.searchForHomePage().subscribe(
      _items => {
        this.vehicles = _items;

        this.vehiclesOnRoad = this.vehicles.filter(_vehicle => _vehicle.isDrivingOnRoad() && _vehicle.isActive());
        this.vehiclesOnRoad.forEach(_onRoad => {
          this.fileSvc.download(_onRoad.frontPicture.id).then(url => {
            _onRoad.frontPicture.url = url;
          })
        })
        this.vehiclesWaiting = this.vehicles.filter(_vehicle => _vehicle.isDrivingStop() && _vehicle.isActive() );
        this.vehiclesTotal = this.vehiclesOnRoad.length + this.vehiclesWaiting.length;
      },
      (err: APIResponse) => {
        this.toastSvc.error(err.message);
      }
    )
  }

  addVehicle() {
    this.navCtrl.push('VehicleRegistrationPage');
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  openResevation(item: Item) {
    this.navCtrl.push('ReservationListPage', {
      item: item
    });
  }

  openReminder() {
    this.navCtrl.push('ReminderPage');
  }
  upload() {

  }
  showDeveloperPage(){
    this.count = this.count + 1;
    if (this.count >= 3) {
      this.navCtrl.setRoot('DeveloperPage');
      this.count = 0;
    }
  }
}
