export class AppSettingModel
{
    general: General;
    security: Security;
    smartTestDriveSetting: SmartTestDriveSetting;
}

export class General {
    timezone: any;
    timezoneForComparison: string;
}

export class Security {
    useDefaultPasswordComplexitySettings : boolean;
    passwordComplexity: PasswordComplexity;
    defaultPasswordComplexity: PasswordComplexity;
}
export class PasswordComplexity {
    minLength: number;
    maxLength: number;
    useNumbers: boolean;
    useUpperCaseLetters: boolean;
    useLowerCaseLetters: boolean;
    usePunctuations: boolean;
}

export class SmartTestDriveSetting {
    tenantSide : TenantSide;
    hostSide: HostSide;
}

export class TenantSide {
    courseExitLatitude: any;
    courseExitLongitude: any;
    courseExitRadius: any
    performTakingOdometerPhotoBeforeAndAfterTestDrive: boolean;
    performVhcBeforeAndAfterTestDrive: boolean;
    performSurveyAfterTestDrive: boolean;
}
export class HostSide {
    emergencyStopSecondThreshold: number;
    emergencyStopDecelerationThreshold: number;
    speedingSecondThreshold: number;
    speedingAccelerationThreshold: number;
    tryToConnectToBluetoothDeviceBeforeTestDrive: boolean;
}
