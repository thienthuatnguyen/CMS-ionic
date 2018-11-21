export class VersionResponseModel {
    forceToUpdate: boolean;
    latestVersionName: string;
    storeUrl: string;
}
export class VersionModel {
    appIdentifier: string;
    currentVersionName: string;
}