import { NgModule } from "@angular/core";
import { IvtHttpClientModule, IvtHttpClientConfig } from "@ivt/http-client";
import { IvtSecurityModule, IvtSecurityConfig, IvtSecurityService } from "@ivt/security";
import { HttpClientConfig } from "../app/http.client.config";
import { SecurityConfig } from "../security/security.config";
import { SettingService } from "./setting.service";
import { VehicleService } from "./vehicle.service";
import { VehicleTypeService, TrimService, ModelYearService } from "./vehicle.type.service";
import { SecurityService } from "../security/security.service";
import { IonicModule } from "ionic-angular";
import { Utils } from "./util.service";
import { ToastService } from "./toast.service";
import { CustomerService } from "./customer.service";
import { MarkService } from "./mark.service";
import { VehcileHealthCheckService } from "./commentAndPhoto.service";
import { FileService } from "./file.service";
import { ReservationService } from "./reservation.service";
import { UserService } from "./user.service";
import { DocumentService } from "./document.service";
import { SurveyQuestionService } from "./survey.question.service";
import { SurveyResponseService } from "./survey.response.service";
import { PasswordService } from "./password.service";
import { CameraService } from "./camera.service";
import { BluetoothService } from "./bluetooth.service";
import { DialogService } from "./dialog.service";
import { LoadingService } from "./loading.service";
import { DrivingRecordService } from "./driving.record.service";
import { GeoService } from "./geo.service";
import { VHCService } from "./mark.comment.service";
import { AppSettingService } from "./app.setting.service";
import { VehicleOdometerService } from "./vehicle.odometer.service";
import { TaskQueueService } from "./task.queue.service";
import { ProgressService } from "./progress.service";
import { DeveloperService } from "./developer.service";
import { STDClientInterceptor } from "./std.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UIHttpInjector } from "./ui.http.injector";
import { LanguageService } from "./language.service";
import { NotificationService } from "./notification.service";
import {VersionService} from './version.service'
import { UpdateVersionService } from "./update.version.service";
import { AndroidPermissions } from "@ionic-native/android-permissions";

@NgModule({
    imports: [
        IvtHttpClientModule.forRoot(),
        IvtSecurityModule.forRoot(),
    ],
    providers: [
        {
            provide: IvtHttpClientConfig, useClass: HttpClientConfig
        },
        {
            provide: IvtSecurityConfig, useClass: SecurityConfig
        },
        {
            provide: IvtSecurityService, useClass: SecurityService
        },
        { 
            provide: HTTP_INTERCEPTORS, useClass: STDClientInterceptor, multi: true 
        },
        ReservationService,
        UserService,
        DocumentService,
        SettingService,
        VehicleService,
        VehicleTypeService,
        ModelYearService,
        TrimService,
        Utils,
        ToastService,
        CustomerService,
        MarkService,
        FileService,
        VehcileHealthCheckService,
        SurveyQuestionService,
        SurveyResponseService,
        PasswordService,
        CameraService,
        BluetoothService,
        DialogService,
        LoadingService,
        DrivingRecordService,
        GeoService,
		VHCService,
		AppSettingService,
        VehicleOdometerService,
        TaskQueueService,
        ProgressService,
        DeveloperService,
        UIHttpInjector,
        LanguageService,
        NotificationService,
        VersionService,
        AndroidPermissions,
        UpdateVersionService
    ]
})
export class AppServicesModule {

}