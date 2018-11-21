import { LocalSettingModel } from "../models/config/local.setting.model";

export class Config {
    static hostUrl = LocalSettingModel.hostUrl;
    private static baseUrl = Config.hostUrl + '/api';
    private static appServiceUrl = Config.baseUrl + '/services/app';
    private static vehicleServiceUrl = Config.baseUrl + '/services/vehicle';
    // All API response will be transformed. Please checkout HttpClientConfig.transformResponseBody()
    static api = {
        GetVehiclesWithApplicationForApp: Config.appServiceUrl + '/vehicle/GetVehiclesWithApplicationForApp',
        Login: Config.baseUrl + '/Account',
        SignUp: "SignUp",
        GetCurrentLoginInformations: Config.appServiceUrl + '/session/GetCurrentLoginInformations',
        GetAllLocalizationsForApp: Config.appServiceUrl + '/language/GetAllLocalizationForApp',
        GetAllPermissionsForApp: Config.appServiceUrl + '/permission/GetAllPermissionsForApp',
        GetFormattedAddress: Config.appServiceUrl + '/googleApi/GetFormattedAddress',
        GetApplicationsForApp: Config.appServiceUrl + '/application/GetApplicationsForApp',
        CreateOrUpdateReservationForApp: Config.appServiceUrl + '/application/CreateOrUpdateReservationForApp',
        CreateOrUpdateApplicationForApp: Config.appServiceUrl + '/application/CreateOrUpdateApplicationForApp',
        GetAvailableReservationTimeSlots: Config.appServiceUrl + '/appointmentSlot/GetAvailableReservationTimeSlots',
        CancelReservation: Config.appServiceUrl + '/application/CancelReservation',
        StartDrivingRecord: Config.appServiceUrl + '/drivingRecord/StartDrivingRecord',
        CreateDrivingRawRecords: Config.appServiceUrl + '/drivingRecord/CreateDrivingRawRecords',
        CreateVehicleForApp: Config.appServiceUrl + '/vehicle/CreateVehicleForApp',
        GetVehicleSegments: Config.appServiceUrl + '/vehicleSegment/GetVehicleSegments',
        GetVehiclesForApp: Config.appServiceUrl + '/vehicle/GetVehiclesForApp',
        GetApplicationsSurveyUndoneWithDrivingRecord: Config.appServiceUrl + '/application/GetApplicationsSurveyUndoneWithDrivingRecord',
        GetVehicleHealthCheckDamages: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckDamages',
        GetVehicleHealthCheckDamagesAndCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckDamagesAndCommentAndPhotos',
        UploadPicture: Config.hostUrl + '/file/UploadPicture',
        GetPicture: Config.hostUrl + '/file/GetPicture',
        DownloadUserManualAsPdf: Config.hostUrl + '/file/DownloadUserManualAsPdf',
        CreateOrUpdateVehicleHealthCheckDamages: Config.appServiceUrl + '/vehicleHealthCheck/CreateOrUpdateVehicleHealthCheckDamages',
        CreateVehicleHealthCheckDamagesAndCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/CreateVehicleHealthCheckDamagesAndCommentAndPhotos',
        CreateOrUpdateSimpleSurveyResponses: Config.appServiceUrl + '/simpleSurvey/CreateOrUpdateSimpleSurveyResponses',
        GetSimpleSurveyQuestionsAndResponses: Config.appServiceUrl + '/simpleSurvey/GetSimpleSurveyQuestionsAndResponses',
        GetVehicleHealthCheckCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckCommentAndPhotos',
        CreateOrUpdateVehicleHealthCheckCommentAndPhotosForApp: Config.appServiceUrl + '/vehicleHealthCheck/CreateOrUpdateVehicleHealthCheckCommentAndPhotosForApp',
        ChangePassword: Config.appServiceUrl + '/profile/ChangePassword',
        EndDrivingRecord: Config.appServiceUrl + '/drivingRecord/EndDrivingRecord',
        ContinueDrivingRecord: Config.appServiceUrl + '/drivingRecord/ContinueDrivingRecord',
        FinishDrivingRecord: Config.appServiceUrl + '/drivingRecord/FinishDrivingRecord',
        GetDrivingRecords: Config.appServiceUrl + '/drivingRecord/GetDrivingRecords',
        UploadProfilePicture: Config.hostUrl + '/file/UploadProfilePicture',
        GetAllSettingsForApp: Config.appServiceUrl + '/tenantSettings/GetAllSettingsForApp',
        CreateVehicleOdometerForApp: Config.appServiceUrl + '/vehicleOdometer/CreateVehicleOdometerForApp',
        CheckVersionForUpdates: Config.appServiceUrl + '/appVersion/CheckVersionForUpdates'


    };
    // date format is used for angular date pipe
    static date = {
        formatTime: 'hh:mm',
        SeverFormatMoment: "YYYY-MM-DD HH:mm:ss",
        YYYYMMDD: "YYYY-MM-DD",
        displayFormat: "MM/dd/yyyy HH:mm:ss",
        displayShortTime: "MM/dd/yyyy",
        displayFormatDateSurvey: "MM/dd/yyyy HH:mm",
        TestDriveResultKoreanFormat: "YYYY년 M월 D일, HH:mm",
        TestDriveResultDurationDateFormat: "HH/mm"

    };
    // date format is used for moment
    static moment = {
        displayFormat: "MM/DD/YYYY HH:mm:ss",
        locale: "en"
    }
    static setting = {
        auto_start: "settings.auto_start",
        prevent_screen_from_sleeping: "settings.prevent_screen_from_sleeping"
    };
    static LocationForApp = "LocationForApp";
    static AllPermissionForApp = "AllPermissionForApp";
    static AppSetting = "AppSetting";
    static reservation = {
        startDrive: ["CheckIn", "Driving"],
        createDocument: ["Appointment", "NoShow"],
        editDocument: ["Appointment", "NoShow", "Canceled"],
        done: ["Done", "Canceled"]
    }
    static direction = {
        ltr: "ltr",
        rtl: "rtl"
    }
}
