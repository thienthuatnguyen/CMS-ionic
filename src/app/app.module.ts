import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

import { Device } from "@ionic-native/device";
import { File } from "@ionic-native/file";
import { EmailComposer } from "@ionic-native/email-composer";
import { BLE } from "@ionic-native/ble";
import { DocumentViewer } from '@ionic-native/document-viewer';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';



import { Items } from '../mocks/providers/items';
import { VehicleItems } from '../mocks/providers/vehicleItems';
import { Api, Util } from '../providers';
import { MyApp } from './app.component';
import { SplashPage } from "../pages/splash/splash";

import { SignaturePadModule } from 'angular2-signaturepad';
// import { SignaturePadModule2 } from 'angular2-signaturepad';
// import * as Sentry from 'sentry-cordova';
import { RealTimeCheckProvider } from '../providers/real-time-check/real-time-check';
import { TestDriveProvider } from '../providers/test-drive/test-drive';
import { AppServicesModule } from '../services/services.module';

import { MomentModule } from 'ngx-moment';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Insomnia } from '@ionic-native/insomnia';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Autostart } from '@ionic-native/autostart';
import { AppVersion } from '@ionic-native/app-version';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export class SentryIonicErrorHandler extends IonicErrorHandler {
  // constructor(
  //   private toastSvc: ToastService
  // ) {
  //   super();
  // }
  handleError(error) {
    console.error('[Global Error Handler] error: ', error);
    // super.handleError(error);
    // try {
    //   Sentry.captureException(error.originalError || error);
    // } catch (e) {
    //   console.error(e);
    // }
  }
}

@NgModule({
  declarations: [
    MyApp,
    SplashPage
  ],
  imports: [
    MomentModule,
    SignaturePadModule,
    BrowserModule,
    HttpClientModule,
    AppServicesModule,
    PdfViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage
  ],
  providers: [
    TestDriveProvider,
    BLE,
    BluetoothSerial,
    EmailComposer,
    File,
    FileTransfer,
    Device,
    BackgroundGeolocation,
    LocationAccuracy,
    Diagnostic,
    DocumentViewer,
    Insomnia,
    Api,
    Items,
    VehicleItems,
    Util,
    Crop,
    Camera,
    Autostart,
    DocumentViewer,
    OpenNativeSettings, // required to open bluetooth setting page on ios
    SplashScreen,
    // Keep this to enable Ionic's runtime error handling during development
    // { provide: ErrorHandler, useClass: IonicErrorHandler }
    { provide: ErrorHandler, useClass: SentryIonicErrorHandler },
    RealTimeCheckProvider,
    TestDriveProvider,
    AppVersion
  ]
})
export class AppModule { }
