export class BaseReservation {
  id: number;
  vehicleId: number = 0;
  vehicleDisplayName: string = null;
  consultantUserId: number;
  customerFullName: string = null;
  customerPhoneNumber: string = null;
  customerEmailAddress: string = null;
  recommenderFullName: string = null;
}

export class Reservation extends BaseReservation{
  appointmentDate: string;
  appointmentFromTime: string = null;
  appointmentToTime: string = null;
}

export class ReservationDocument extends BaseReservation {
  customerSalutationEnum: string;
  driverLicenseFrontSidePictureId: string ;
  driverLicenseBackSidePictureId: string ;
  isAgreedWithTermsAndConditions: boolean;
  isAgreedWithPrivacyPolicy: boolean;
  isAgreedWithEmailMarketing: boolean;
  customerSignatureId: string;
  consultantSignatureId: string;
  customerSignedTime: any;
  consultantSignedTime: any;
}
export class ReservationModel extends ReservationDocument {
  tenantId: number;
  vehicleTypeDisplayName: string;
  modelYearDisplayName: string;
  trimDisplayName: string;
  vehicleDisplayName: string
  pairedDeviceIdOniOS: string
  pairedDeviceIdOnAndroid: string
  appointmentFromDateTimeLocal: any;
  appointmentToDateTimeLocal: any;
  consultantUserName: string;
  applicationStatusEnum: string;
  driverLicenseFrontSidePictureId: string;
  driverLicenseBackSidePictureId: string;
  termsAndConditions: string;
  privacyPolicy: string;
  lastModificationTime: string;
  lastModifierUserId: string;
  creationTime: string;
  creatorUserId: any;
  appointmentDateLocal: any;
  licensePlateNo: string;
  vehicleFrontSidePictureId: string;
  vehicleSidePictureId: string;
}
