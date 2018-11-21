import { IvtHttpClientConfig, APIResponse, APICode } from "@ivt/http-client";
import { Injectable } from "@angular/core";
import { IvtStorageService, IvtSecurityService } from "@ivt/security";
import { deserialize } from 'class-transformer';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Config } from "./app.config";

@Injectable()
export class HttpClientConfig extends IvtHttpClientConfig {
    DO_NOT_TRANSFORM = null;
    constructor(private service: IvtSecurityService) {
        super();
    }
    getAuthorizationHeader(): string {
        if (this.service.isAuthenticated()) {
            return 'Bearer ' + this.service.getUser().token;
        } else {
            return '';
        }
    }
    transformResponseBody(response: HttpResponse<any> | HttpErrorResponse): APIResponse {
        if (response.url) {
            for (let apiName in Config.api) {
                // url may have params, so checking indexOf
                if (response.url.indexOf(Config.api[apiName]) > -1) {
                    let testDriveResponse;
                    if (response instanceof HttpErrorResponse) {
                        testDriveResponse = response.error as APITestDriveResponse;
                    } else {
                        testDriveResponse = response.body as APITestDriveResponse;
                    }
                    return this.convertToAPIResponse(testDriveResponse);
                }
            }
        }
        return this.DO_NOT_TRANSFORM;
    }
    convertToAPIResponse(testDriveResponse: APITestDriveResponse): APIResponse {
        try {
            const apiResponse = new APIResponse();
            if (testDriveResponse.result && testDriveResponse.result.items) {
                apiResponse.data = testDriveResponse.result.items;
            } else {
                apiResponse.data = testDriveResponse.result;
            }
            if (testDriveResponse.success === true) {
                apiResponse.code = APICode.Success;
            } else {
                apiResponse.code = testDriveResponse.error.code;
                apiResponse.message = testDriveResponse.error.message;
                if (testDriveResponse.error.details) {
                    apiResponse.message = testDriveResponse.error.details;
                }
                // if (testDriveResponse.error.validationErrors) {
                //     apiResponse.message = testDriveResponse.error.validationErrors;
                // }
            }
            return apiResponse;

        } catch (exception) {
            console.info('[HttpClientConfig] transformResponse(): Cannot cast to APITestDriveResponse');
            return this.DO_NOT_TRANSFORM;
        }
    }
}

export class APITestDriveResponse {
    result: any;
    targetUrl: string;
    success: boolean;
    error: {
        code: string,
        message: string,
        details: any,
        validationErrors: any
    };
    uAuthorizedRequest: boolean;
    __abp: boolean
}