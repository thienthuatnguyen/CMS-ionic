import { IvtSecurityConfig } from "@ivt/security";
import { Config } from "../app/app.config";
import { Injectable } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SecurityConfig extends IvtSecurityConfig {
    apiUrl = Config.api.Login;
    rememberLogin = true;
}