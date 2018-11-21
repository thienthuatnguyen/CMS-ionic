import { IvtSecurityAbstractService, User, IvtSecurityConfig, IvtStorageService, Tenant } from "@ivt/security";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { APIResponse, APICode } from "@ivt/http-client";
import { map } from "rxjs/operators";
import { Config } from "../app/app.config";
import { UserInfoModel, UserInfoServerModel } from "../models/userInfo.model";
import { of } from 'rxjs/observable/of';
@Injectable()
export class SecurityService extends IvtSecurityAbstractService<User> {

   // private _login: boolean = false;
   private callbackSuccess:any;
    constructor(http: HttpClient, db: IvtStorageService, config: IvtSecurityConfig) {
        super(http, db, config);
    }
    afterLogin(res: APIResponse) {
            if (res.code === APICode.Success) {
                let user = new User();
                user.token = res.data;
                this.storeUserCredentials(user);
                this.getCurrentLoginInformations().subscribe((result:any)=>{
                    user = this.getCurrentLoginInfor(result);
                    user.token = res.data;
                    this.storeUserCredentials(user);
                    this.callbackSuccess();
                })
            }
    }
    upateProfile(user){
        this.storeUserCredentials(user);
        this.callbackSuccess();
    }
    processAfterLogin(success: any) {
        this.callbackSuccess = success;
    }

    logout() {
        return super.logout();
    }
    private getCurrentLoginInformations(){
        let url = Config.api.GetCurrentLoginInformations;
        return this.http.post(url,{});
    };
    private getCurrentLoginInfor(response: any) {
        let user = new UserInfoModel()
        response = response.data;
        user.id = response.user.id;
        user.email = response.user.emailAddress;
        user.pictureID = response.user.profilePictureId;
        user.name = response.user.name;
        user.surname = response.user.surname;
        user.username = response.user.userName;
        user.tenant = new Tenant();
        user.tenant.logoID = response.tenant.logoId;
        user.tenant.name = response.tenant.name;
        user.tenant.termsAndConditions = response.tenant.termsAndConditions;
        return user;
      }
}

