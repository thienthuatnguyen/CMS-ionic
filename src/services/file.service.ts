import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Config } from '../app/app.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIResponse, APICode, IvtHttpClientConfig } from '@ivt/http-client';
import { ToastService } from './toast.service';
import { Utils } from './util.service';
import { APITestDriveResponse, HttpClientConfig } from '../app/http.client.config';
import { FileEntry } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './loading.service';

@Injectable()
export class FileService {

    uploadingImagesString: string;
    private fileTransfer: FileTransferObject;
    private uploadUrl = Config.api.UploadPicture;
    private uploadProfileUrl = Config.api.UploadProfilePicture;
    private downloadUrl = Config.api.GetPicture;
    private downloadUserManualURL = Config.api.DownloadUserManualAsPdf;
    private canCache = false;
    private cachedFolder = null;
    FILE_TYPE = 'image/jpeg';
    FILE_EXTENSION = '.jpg';

    constructor(
        private transfer: FileTransfer,
        private file: File,
        private http: HttpClient,
        private toastSvc: ToastService,
        private utils: Utils,
        private httpClientConfig: IvtHttpClientConfig,
        private loadingSvc: LoadingService,
        private platform: Platform,
        private document: DocumentViewer,
        private translate: TranslateService
    ) {
        this.platform.ready().then(_ => {

            this.fileTransfer = this.transfer.create();
            this.cachedFolder = this.file.cacheDirectory + 'assets/';

            this.file.checkDir(this.file.cacheDirectory, 'assets').then(_ => {
                this.canCache = true;
            }).catch(err => {
                this.file.createDir(this.file.cacheDirectory, 'assets', false).then(_ => {
                    this.canCache = true;
                }).catch(err => {
                    console.error('Cannot create /assets folder');
                    this.canCache = false;
                })
            })
        })
    }

    async viewDocument(url: string, contentType: string, options: DocumentViewerOptions) {
        await this.IamReady();
        this.document.viewDocument(this.file.applicationDirectory + url, contentType, options);
        // this.fileOpener.open(this.file.applicationDirectory + 'www/assets/docs/Smart_Test_Drive_Manual_ENG.pdf', 'application/pdf');
    }
    private IamReady() {
        this.translate.get('msg.uploading_images').subscribe((value) => {
            this.uploadingImagesString = value;
        });
        return this.platform.ready();
    }

    /**
     * 
     * @param fileUrl: dataURI or FileSystem URL
     * 
     * How to use:
     * 
     * this.fileSvc.upload(files.item(0)).then(
     * (result: APIResponse) => {
     *   console.log('result....', result);
     * },
     * (error) => {
     *   console.log('Error uploading...', error);
     * }
     *
     */
    async upload(fileUrl: string, options: FileUploadOptions): Promise<string> {
        return this.uploadCommon(fileUrl, options, this.uploadUrl);
    }
    async uploadProfile(fileUrl: string, options: FileUploadOptions): Promise<string> {

        return this.uploadCommon(fileUrl, options, this.uploadProfileUrl);
    }
    /**
     * 
     * @param id 
     * On Browser: this will return URL.createObjectURL(), so remember to revoke URL after using
     * On Device: this will return base64 string
     */
    async download(id: string): Promise<string> {
        await this.IamReady();
        let _url = this.downloadUrl + `?id=${id}`;
        if (this.utils.isBrowser()) {
            return this.downloadBrowser(_url);
        } else {
            return this.downloadNative(_url, id + this.FILE_EXTENSION);
        }
    }

    downloadUserManual(): Promise<string> {
        return this.downloadBrowser(this.downloadUserManualURL);
    }

    private async uploadCommon(fileUrl: string, options: FileUploadOptions, uploadUrl: any) {
        await this.IamReady();
        options.fileKey = "file";
        let result = null;

        let loader = await this.loadingSvc.create('msg.uploading_images');
        loader.present();
        try {
            if (this.utils.isBrowser()) {
                result = await this.uploadBrowser(this.utils.dataURIToBlob(fileUrl), options, uploadUrl).catch(err => this.handleUploadError(err))
            } else {
                result = await this.uploadNative(fileUrl, options, uploadUrl).catch(err => this.handleUploadError(err))
            }
        } catch (ex) {
            result = ex;
        } finally {
            loader.dismiss();
        }
        return result;
    }
    private downloadBrowser(_url: string): Promise<string> {
        return this.http.get(_url, {
            responseType: "blob"
        }).toPromise().then(
            (res: Blob) => {
                return URL.createObjectURL(res);
            },
            reject => this.handleDownloadError(reject)
        )
    }

    private downloadNative(_url: string, fileName: string): Promise<string> {
        return this.checkLocalFile(fileName).then(_ => {
            return this.readLocalFile(fileName);
        }).catch(err => {
            return this.downloadToLocal(_url, fileName).then(
                (entry: FileEntry) => this.readLocalFile(entry.name),
                reject => this.handleDownloadError(reject)
            )
        })
    }

    public readFileWithoutPath(fileName: string): Promise<string> {
        let folder = '';
        let file = '';
        if(this.platform.is('android')) {
        fileName = fileName.replace(this.file.externalCacheDirectory, '');
        if (fileName.indexOf('?') > 0) {
            fileName = fileName.substr(0, fileName.indexOf('?'))
        }

            folder = this.file.externalCacheDirectory;
            file = fileName;
        }
        else {
            let lastIndex = fileName.lastIndexOf("/");
            folder = fileName.substr(0, lastIndex + 1);
            file = fileName.substr(lastIndex + 1);
        }
        
        return this.file.readAsDataURL(folder, file).then(base64 => {
            return base64;
        }).catch(err => {
            console.error('Error while reading cached asset file to base64');
            return '';
        })
    }

    private readLocalFile(fileName: string): Promise<string> {
        return this.file.readAsDataURL(this.cachedFolder, fileName).then(base64 => {
            return base64;
        }).catch(err => {
            console.error('Error while reading cached asset file to base64');
            return '';
        })
    }
    private downloadToLocal(url: string, fileName: string) {
        return this.fileTransfer.download(url, this.cachedFolder + fileName, true, {
            headers: {
                "Authorization": this.httpClientConfig.getAuthorizationHeader(),
                "Content-Type": this.FILE_TYPE
            }
        })
    }
    private checkLocalFile(fileName: string): Promise<boolean> {
        return this.file.checkFile(this.cachedFolder, fileName);
    }
    private uploadBrowser(file: Blob, options: FileUploadOptions, uploadUrl: any): Promise<string> {
        const formData: FormData = new FormData();
        formData.append(options.fileKey, file, options.fileName);
        return this.http.post<APIResponse>(uploadUrl, formData, {
            reportProgress: true
        }).toPromise()
            .then(
                (res) => {
                    if (res.code === APICode.Success) {
                        return res.data.id;
                    } else {
                        return Promise.reject(res);
                    }
                },
                rejection => this.handleUploadError(rejection)
            );
    }
    private uploadNative(fileUrl: string, options: FileUploadOptions, uploadUrl: any): Promise<string> {
        return this.fileTransfer.upload(fileUrl, uploadUrl, {
            fileKey: 'file',
            headers: {
                "Authorization": this.httpClientConfig.getAuthorizationHeader()
            }
        }).then((result: FileUploadResult) => {
            try {
                let testDriveResponse = JSON.parse(result.response) as APITestDriveResponse;
                if (testDriveResponse.success === true) {
                    return testDriveResponse.result.id;
                } else {
                    return Promise.reject(testDriveResponse);
                }
            } catch (ex) {
                console.error('Cannot extract APITestDriveResponse ', ex);
                return Promise.reject(result);
            }
        }, rejection => this.handleUploadError(rejection))
    }

    private handleDownloadError(err: any) {
        // this.toastSvc.error('msg.file_download_failed');
        return this.handleError(err);
    }

    private handleUploadError(err: any) {

        // this.toastSvc.error('msg.file_upload_failed');
        return this.handleError(err);
    }
    private handleError(err: any) {
        console.error(err);
        let res = new APIResponse();
        if (err instanceof HttpErrorResponse) {
            res.code = err.status.toString();
            res.message = err.message;
            // errorMessage = err.message;
        } else if (err instanceof APIResponse) {
            res = err;
            // errorMessage = err.message;
        } else if (err instanceof APITestDriveResponse || err.error) {
            // errorMessage = err.error.message;
            res.code = err.error.code;
            res.message = err.error.message;
        } else {
            // try from FileTransferError

            if (err.http_status == '500') {
                // file not found
                res.message = 'msg.file_not_found';
                res.code = '500';
            } else {
                // try extracting message from FileUploadResult
                res.code = APICode.Undefined;
                if (err.error && err.error.message) {
                    res.message = err.error.message;
                } else {
                    res.message = 'msg.unhandled_error';
                }
            }
        }
        this.toastSvc.error(res.message);
        return Promise.reject(res);
    }

}