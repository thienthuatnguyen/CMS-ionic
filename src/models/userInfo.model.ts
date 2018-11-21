import { Tenant, User } from "@ivt/security";

export class UserInfoModel extends User {
     tenantDetail : TenantInfo
}

export class TenantInfo extends Tenant {
    customCssId: string;
    distributorId: string;
    editionDisplayName: string;
    fullAddress: string;
    logoFileType: string;    
    mileageUnitEnum: string;
    phoneNumber: string;
    websiteUrl: string;
    zipCode: string; 
}

export class UserInfoServerModel {
     tenant: TenantServer;
     user: UserServer;
}

export class TenantServer {
    public customCssId: string;
    public distributorId: string;
    public editionDisplayName: string;
    public fullAddress: string;
    public id: any;
    public logoFileType: string;    
    public logoId: any;
    public mileageUnitEnum: string;
    public name: string;
    public phoneNumber: string;
    public privacyPolicy: string;
    public tenancyName : string;
    public termsAndConditions: string;
    public websiteUrl: string;
    public zipCode: string; 
}
export class UserServer {
    public emailAddress: string;
    public id: any;
    public name: string;
    public profilePictureId: string;
    public surname: string;
    public userName: string;
}