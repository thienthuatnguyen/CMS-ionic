import { Injectable } from "@angular/core";
import { BLE } from "@ionic-native/ble";
import { Platform } from "ionic-angular";
import { ToastService } from "./toast.service";
import { DialogService } from "./dialog.service";
import { IvtDevice } from "../models/device.model";
import { TranslateService } from '@ngx-translate/core';
import { ISubscription } from "rxjs/Subscription";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Utils } from "./util.service";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { map, catchError } from "rxjs/operators";
import { GeoService } from "./geo.service";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";

@Injectable()
export class BluetoothService {

    private subscription: ISubscription;

    constructor(
        private bluetoothLE: BLE,
        private platform: Platform,
        private dialogService: DialogService,
        private translate: TranslateService,
        private diagnostic: Diagnostic,
        private utils: Utils,
        private dialog: DialogService,
        private openNativeSettings: OpenNativeSettings,
        private geoService: GeoService,
        private bluetoothSerial: BluetoothSerial
    ) {
    }

    private IamReady() {
        return this.platform.ready();
    }
    async isEnabled(): Promise<boolean> {
        await this.IamReady();
        try {
            await this.bluetoothSerial.isEnabled();
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    /**
     * return true if enable bluetooth successfully
     */
    async enable(): Promise<boolean> {
        await this.IamReady();
        if (this.utils.isAndroid()) {
            try {
                await this.bluetoothSerial.enable();
                return this.prepareScan();
            } catch (e) {
                console.error(e);
                let msg = await this.translate.get('bluetooth.turn_on_bluetooth').toPromise();
                await this.dialog.alert(msg);
                this.openNativeSettings.open('bluetooth');
                return false;
            }
        } else if (this.utils.isIOS()) {
            let isEnabled = await this.isEnabled();
            console.log('[ios] bluetooth enable status: ', isEnabled);

            if (!isEnabled) {
                let msg = await this.translate.get('bluetooth.turn_on_bluetooth').toPromise();
                await this.dialog.alert(msg);
                this.openNativeSettings.open('bluetooth');
                return false;
            } else {
                return this.prepareScan();
            }
        }
    }
    private async prepareScan(): Promise<boolean> {
        await this.IamReady();
        // BLE scan require Location data
        // Serial scan doesn't require Location data
        return true;
        // return this.geoService.requestLocationPermission(); // bluetooth need location permission to scan
    }

    /**
     * 
     */
    scan(): Observable<IvtDevice> {
        return new Observable(
            observer => {
                let timeout, subscription;
                let _devices: Array<IvtDevice> = [];
                let fn = () => {
                    subscription = this.bluetoothLE.scan([], 5).subscribe(
                        device => {
                            console.log('[scan] result: ', device);
                            let found = _devices.find(_d => _d.id == device.id);
                            if (found) {
                                found.id = device.id;
                                found.name = device.name;
                                found.address = device.address;
                                return null;
                            } else {
                                _devices.push({
                                    id: device.id,
                                    name: device.name,
                                    address: device.address
                                } as IvtDevice);
                                observer.next(device);
                            }
                        },
                        err => console.error(err)
                    )
                    timeout = setTimeout(
                        () => {
                            fn()
                        },
                        5000
                    )
                }
                fn();

                return {
                    unsubscribe: () => {
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }
            }
        )
    }

    /**
     * Support Android only. Promise resolve if target device is found.
     * @param macAddress_or_uuid 
     * 
     */
    scanWithDeviceID(macAddress_or_uuid: string): Promise<IvtDevice> {
        return new Promise<IvtDevice>(
            (resolve, reject) => {
                if (this.utils.isIOS()) {
                    reject();
                    return;
                }
                let found = false;
                // let subscription = this.bluetoothSerial.setDeviceDiscoveredListener().subscribe(
                //     (device: IvtDevice) => {
                //         console.log('Scanning found device: ', device);
                //         if (macAddress_or_uuid === device.address || macAddress_or_uuid === device.id) {
                //             console.log('[scanWithDeviceID] found device');
                //             found = true;
                //             if (subscription) {
                //                 subscription.unsubscribe();
                //             }
                //             resolve(device);
                //         }
                //     }
                // )
                // this.bluetoothSerial.discoverUnpaired().then(
                //     (devices: Array<IvtDevice>) => {
                //         if (!found) {
                //             console.log('[scanWithDeviceID] not found device');
                //             reject();
                //         }
                //     }
                // ).catch(
                //     ex => {
                //         console.error('[scanWithDeviceID] err...', ex);
                //         reject();
                //     }
                // )
                this.bluetoothSerial.list().then(
                    (devices: Array<IvtDevice>) => {
                        for (let i = 0; i < devices.length; i++) {
                            let device = devices[i];
                            if (macAddress_or_uuid === device.address || macAddress_or_uuid === device.id) {
                                found = true;
                                resolve(device);
                            }
                        }
                        if (!found) {
                            reject();
                        }
                    },
                    ex => {
                        console.error('[scanWithDeviceID] err...', ex);
                        reject();
                    }
                )

                // // try to scan paired device first
                // this.bluetoothSerial.list().then(
                //     (devices: Array<IvtDevice>) => {
                //         let found = false;
                //         for (let i = 0; i < devices.length; i++) {
                //             if (macAddress_or_uuid === devices[i].address || macAddress_or_uuid === devices[i].id) {
                //                 console.log('[scanWithDeviceID] found device');
                //                 found = true;
                //                 resolve(devices[i]);
                //                 break;
                //             }
                //         }
                //         if (!found) {
                //             throw new Error('Catch me and scan unpaired devices please');
                //         }
                //     }
                // ).catch(
                //     (err) => {
                //         console.error('[scanWithDeviceID] err...', err);
                //         this.bluetoothSerial.discoverUnpaired().then(
                //             (devices: Array<IvtDevice>) => {
                //                 for (let i = 0; i < devices.length; i++) {
                //                     if (macAddress_or_uuid === devices[i].address || macAddress_or_uuid === devices[i].id) {
                //                         resolve(devices[i]);
                //                         break;
                //                     }
                //                 }
                //                 reject();
                //             }
                //         )
                //     }
                // )

            }
        )
    }

    /**
     * You need to subscribe to trigger connect. You cannot use toPrimise()
     * @param macAddress_or_uuid 
     */
    connect(macAddress_or_uuid: string): Observable<any> {
        return this.bluetoothLE.connect(macAddress_or_uuid).pipe(
            map(data => {
                console.log('Pair device successfully..', macAddress_or_uuid);
                console.log('Peripheral data..', data);
                return data;
            }),
            catchError(err => {
                console.error('Pair device failed..', err);
                throw err;
            })
        );;
    }

    async disconnect(id: string): Promise<any> {
        return this.bluetoothLE.disconnect(id);
    }
    async discoverUnpaired(): Promise<any> {
        // (<any>window).bluetoothClassicSerial.discoverUnpaired(
        //     devices => {
        //         console.log('[bluetoothSerial] devices=', devices);
        //     },
        //     err => console.error('[bluetoothSerial] err =', err)
        // )
        if (this.utils.isAndroid()) {
            return this.bluetoothSerial.discoverUnpaired();
        } else if (this.utils.isIOS()) {
            return this.bluetoothSerial.list();
        }
        // return [];
    }
}