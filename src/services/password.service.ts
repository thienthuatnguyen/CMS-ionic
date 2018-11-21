import { Injectable } from "@angular/core";
import { IvtHttpClientConfig } from "@ivt/http-client";
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService, ServerModel } from "./http.abstract.service";
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import { PasswordModel } from "../models/password.model";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class PasswordService extends HttpAbstractService<PasswordModel, PasswordServerModel> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, config, '', PasswordModel, PasswordServerModel, injector);
    }
    save(passwordModel: PasswordModel): Observable<PasswordModel> {
        this.url = Config.api.ChangePassword;
        return super.save(passwordModel);
    }

}

export class PasswordServerModel extends ServerModel<PasswordModel> {
    CurrentPassword: string;
    NewPassword: string;
    NewPasswordRepeat: string;

    fromClientModel(passwordModel: PasswordModel) {
        this.CurrentPassword = passwordModel.CurrentPassword;
        this.NewPassword = passwordModel.NewPassword;
        this.NewPasswordRepeat = passwordModel.NewPasswordRepeat;
    }
}