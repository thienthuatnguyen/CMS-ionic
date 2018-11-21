import { Injectable, NgZone } from "@angular/core";
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from "@ionic-native/background-geolocation";
import { catchError, map } from "rxjs/operators";
import { ToastService } from "./toast.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Utils } from "./util.service";
import { Platform } from "ionic-angular";
import { Diagnostic } from "@ionic-native/diagnostic";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";
import { TranslateService } from "@ngx-translate/core";
import { DialogService } from "./dialog.service";
import { LocationAccuracy } from "@ionic-native/location-accuracy";

@Injectable()
export class GeoService {
    private storedLocations: Array<BackgroundGeolocationResponse> = [];
    private subscription: Subscription;
    private isRecording: boolean = false;
    private serviceRunning = false;
    private listeners: Array<(loc: BackgroundGeolocationResponse) => void> = [];

    private config: BackgroundGeolocationConfig;
    private _window = (<any>window);

    constructor(
        private backgroundGeolocation: BackgroundGeolocation,
        private toastSvc: ToastService,
        private utils: Utils,
        private platform: Platform,
        private ngZone: NgZone,
        private diagnostic: Diagnostic,
        private openNativeSettings: OpenNativeSettings,
        private translate: TranslateService,
        private dialog: DialogService,
        private locationAccuracy: LocationAccuracy,
    ) {
        this.platform.ready().then(
            () => {
                let isIOS = this.utils.isIOS();
                this.config = {
                    locationProvider: this.backgroundGeolocation.LocationProvider.ANDROID_DISTANCE_FILTER_PROVIDER,
                    desiredAccuracy: 0,
                    stationaryRadius: isIOS ? 5 : 1, // IOS is updating so frequently
                    distanceFilter: isIOS ? 5 : 1,
                    debug: false, //  enable this hear sounds for background-geolocation life-cycle.
                    stopOnTerminate: true, // enable this to clear background location settings when the app terminates,
                    interval: 2000,
                    fastestInterval: 1000,
                    activitiesInterval: 1000,
                    activityType: 'AutomotiveNavigation',
                    saveBatteryOnBackground: false,
                    pauseLocationUpdates: false // Apple docs ask to restart manually, so we don't allow to pause
                }
            }
        )
    }

    /**
     * Stop background geolocation task and reset service state
     */
    stop() {
        // this.backgroundGeolocation.stop();
        console.log('[GeoService] stop');
        this.serviceRunning = false;
        // this._window.backgroundGeolocation.stop();
        if (this.utils.isIOS()) {
            this.backgroundGeolocation.finish();
        }
        this.backgroundGeolocation.stop();
        // this._window.BackgroundGeolocation.removeAllListeners('location');
        // this._window.BackgroundGeolocation.removeAllListeners('stationary');
        // this._window.BackgroundGeolocation.removeAllListeners('background');
        // this._window.BackgroundGeolocation.removeAllListeners('foreground');
        this.listeners = [];
        this.isRecording = false;
        this.storedLocations = [];
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    pauseRecord() {
        this.isRecording = false;
    }
    resumeRecord() {
        this.isRecording = true;
    }

    getStoredLocations() {
        return this.storedLocations;
    }

    /**
     * Subscribe to location changes. If you don't want to receive the changes, please ubsubscribe it
     * @param fn 
     */
    subscribe(fn: (loc: BackgroundGeolocationResponse) => void) {

        this.listeners.push(fn);
        let index = this.listeners.length - 1;
        this.ngZone.run(
            () => {
                this.storedLocations.forEach(
                    loc => fn(loc)
                )
            }
        )
        return {
            unsubscribe: () => {
                this.listeners.splice(index, 1);
            }
        } as GeoSubscription
    }

    /**
     * Start background geolocation
     * Cannot subscribe multiple times on the same Observable
     */
    async start() {
        await this.platform.ready();
        this.isRecording = true;
        this.storedLocations = [];
        this.serviceRunning = true;
        this.subscription = this.backgroundGeolocation.configure(this.config).subscribe(
            (loc: BackgroundGeolocationResponse) => {
                this.onNewLocation(loc);
            },
            ex => {
                console.error('start failed.......', ex);
                this.toastSvc.error('msg.background_location_failed');
                // throw Observable.throw(ex);
            }
        );
        this.backgroundGeolocation.start();
        // this.mockTestLocation();
    }

    switchToForeground(): Promise<any> {
        // return this._window.BackgroundGeolocation.switchMode(this._window.BackgroundGeolocation.FOREGROUND_MODE);
        return this.backgroundGeolocation.switchMode(this.backgroundGeolocation.Mode.FOREGROUND);
    }
    switchToBackground(): Promise<any> {
        // return this._window.BackgroundGeolocation.switchMode(this._window.BackgroundGeolocation.BACKGROUND_MODE);
        return this.backgroundGeolocation.switchMode(this.backgroundGeolocation.Mode.BACKGROUND);
    }

    // private async forceLocationPeriodically() {
    //     await this.platform.ready();
    //     this.interval = setInterval(
    //         () => {
    //             // window.BackgroundGeolocation.getCurrentLocation(
    //             //     (location: BackgroundGeolocationResponse) => {
    //             //         this.onNewLocation(location);
    //             //     },
    //             //     (code: number, message: string) => {

    //             //     },
    //             //     {
    //             //         timeout: 3000,
    //             //         enableHighAccuracy: true
    //             //     }
    //             // )
    //             this.backgroundGeolocation.getLocations().then(
    //                 loc => console.log('backgroundGeolocation:..', loc)
    //             )
    //             this.geolocation.getCurrentPosition({
    //                 timeout: 3000
    //                 // enableHighAccuracy: true
    //             }).then(
    //                 (pos: Geoposition) => {
    //                     this.onNewLocation({
    //                         latitude: pos.coords.latitude,
    //                         longitude: pos.coords.longitude,
    //                         accuracy: pos.coords.accuracy,
    //                         altitude: pos.coords.altitude,
    //                         coords: pos.coords,
    //                         speed: pos.coords.speed,
    //                         timestamp: pos.timestamp,
    //                         time: pos.timestamp
    //                     } as BackgroundGeolocationResponse);
    //                 },
    //                 err => console.error('geolocation error', err)
    //             )
    //         },
    //         1000
    //     );
    // }
    private mockTestLocation() {
        let i = 0;
        setInterval(() => {
            i++;
            this.onNewLocation(
                {
                    accuracy: 10,
                    latitude: 10 + i,
                    longitude: 100 + i,
                } as BackgroundGeolocationResponse
            )
        }, 3000);
    }
    private onNewLocation(loc: BackgroundGeolocationResponse) {
        console.log('[onNewLocation]...', loc);

        let invokeSubscribers = (_loc) => {
            this.ngZone.run(
                () => {
                    console.log('[onNewLocation] ngZone');
                    this.listeners.forEach(fn => {
                        fn(_loc);
                    })
                }
            )
        }
        if (this.isRecording) {
            this.storedLocations.push(loc);
            invokeSubscribers(loc);
        }
    }

    async requestLocationPermission(): Promise<boolean> {
        try {
            let status = await this.diagnostic.getLocationAuthorizationStatus();
            console.log('[requestLocationPermission] status=', status);
            switch (status) {
                case this.diagnostic.permissionStatus.NOT_REQUESTED:
                    console.log("Permission not requested"); // show alert dialog
                    return this.requestLocationAuthorization();
                case this.diagnostic.permissionStatus.DENIED:
                    console.log("Permission denied");
                    return false;
                case this.diagnostic.permissionStatus.GRANTED:
                    console.log("Permission granted always");
                case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    console.log("Permission granted only when in use");
                    return true;
            }
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    async requestLocationAccuracy(): Promise<boolean> {
        if (this.utils.isAndroid()) {
            let canRequest = await this.locationAccuracy.canRequest();
            console.log('canRequest=', canRequest);
            // temporary need not check can request, it does not run on ios, will investigate later
            if (canRequest) {
                try {
                    let accuracy = await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                    console.log("Successfully requested accuracy: " + accuracy.message);
                    return true;
                } catch (err) {
                    console.log('Error requesting location accuracy', err);
                    return false;
                }
            } else {
                return false;
            }
        } else if (this.utils.isIOS()) {
            // IOS: canRequest is true if location is OFF and is not requesting. request() method will open settings page
            try {
                let accuracy = await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                console.log("IOS Successfully requested accuracy: " + accuracy);
                return true;
            } catch (err) {
                console.log('IOS Error requesting location accuracy', err);
                return false;
            }
        }
    }

    private async requestLocationAuthorization(): Promise<boolean> {
        let requestStatus = await this.diagnostic.requestLocationAuthorization('always');
        if (requestStatus === this.diagnostic.permissionStatus.DENIED || requestStatus === this.diagnostic.permissionStatus.NOT_REQUESTED) {
            return false;
        } else {
            return true;
        }
    }
    async displayLocationRequiredAlert() {
        const msg = await this.translate.get('msg.location_service_required').toPromise();
        return this.dialog.alert(msg);
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        let deg2rad = (deg) => {
            return deg * (Math.PI / 180)
        }

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // distance in km

        console.log("[getDistanceFromLatLonInKm]: distance: ", d)
        return d;
    }
}

export interface GeoSubscription {
    unsubscribe: () => void;
}