import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { BluetoothService } from '../../services/bluetooth.service';
import { GeoService } from '../../services/geo.service';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { VehicleService } from '../../services/vehicle.service';
import { retryWhen, map, catchError, concat, delayWhen } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '../../services/dialog.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
@IonicPage()
@Component({
    selector: 'test-page',
    templateUrl: 'test.page.html'
})
export class TestPage {
    internalSubscription: any;
    devices: any = [];
    lastRecordedLocation: any;
    drivenMileage: number = 0;

    constructor(
        private bluetoothSvc: BluetoothService,
        private geoSvc: GeoService,
        private vehicleService: VehicleService,
        private dialog: DialogService,
        private bluetoothSerial: BluetoothSerial
    ) {

    }
    async getVehicle() {
        this.vehicleService.searchForHomePage()
            .toPromise().then(
                res => console.log(res),
                err => console.error(err)
            );
    }
    async blue() {
        let ok = await this.bluetoothSvc.enable();
        if (ok) {
            this.internalSubscription = this.bluetoothSvc.scan().subscribe(
                rs => {
                    console.log('this=', this);
                    rs && this.devices.push(rs);
                },
                err => console.error(err)
            )
        }
    }
    async serialScan() {
        this.bluetoothSvc.discoverUnpaired().then(
            devices => {
                console.log('Serial list: ', devices);
            }
        )
        this.bluetoothSerial.list().then(
            devices => {
                console.log('bonded devices=', devices);
            }
        )
    }
    async connect(id) {
        this.internalSubscription && this.internalSubscription.unsubscribe();
        this.bluetoothSvc.connect(id).subscribe();
    }
    async startGeo() {
        let ok = await this.geoSvc.requestLocationPermission();
        if (ok) {
            ok = await this.geoSvc.requestLocationAccuracy();
            if (ok) {

                this.geoSvc.subscribe(
                    async (loc: BackgroundGeolocationResponse) => {
                        console.log('Get the first location');
                        if (this.lastRecordedLocation) {
                            this.drivenMileage += this.geoSvc.getDistanceFromLatLonInKm(this.lastRecordedLocation.latitude, this.lastRecordedLocation.longitude, loc.latitude, loc.longitude);
                        }
                        this.lastRecordedLocation = loc;
                        console.log('Current mileage ', this.drivenMileage);
                    }
                )
                this.geoSvc.start();
            }
        }
    }

}