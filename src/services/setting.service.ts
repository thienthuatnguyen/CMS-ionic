import { IvtHttpClientConfig } from "@ivt/http-client";
import { Setting } from "../models/setting.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UIAwareHttpService } from "./ui.aware.http.service";
import { UIHttpInjector } from "./ui.http.injector";

@Injectable()
export class SettingService extends UIAwareHttpService<Setting> {
    private KEY = 'user_setting';
    private _settings: Array<Setting> = [];

    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, '', Setting, config, injector);
        this._settings = (JSON.parse(localStorage.getItem(this.KEY)) || []) as Array<Setting>;
        console.log('settings:', this._settings);
    }
    clear() {
        this._settings = [];
    }
    search(): Observable<Array<Setting>> {
        return Observable.of(this._settings);
    }
    save(item: Setting): Observable<Setting> {
        const filterList = this._settings.filter(_item => _item.name === item.name);
        if (filterList.length == 0) {
            const setting = new Setting();
            setting.name = item.name;
            setting.value = item.value;
            this._settings.push(setting);
        } else {
            filterList.forEach(_item => {
                _item.value = item.value;
            });
        }
        localStorage.setItem(this.KEY, JSON.stringify(this._settings));
        return Observable.of(item);
    }
    saveAll(items: Array<Setting>): Observable<Array<Setting>> {
        items.forEach(_item => {
            this.save(_item);
        })
        localStorage.setItem(this.KEY, JSON.stringify(this._settings));
        return Observable.of(items);
    }
}
