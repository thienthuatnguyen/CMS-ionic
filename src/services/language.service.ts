import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { LocalSettingModel } from "../models/config/local.setting.model";
import { Platform } from "ionic-angular";
import { DocumentDirection } from "ionic-angular/platform/platform";
import { Config } from "../app/app.config";

@Injectable()

export class LanguageService {
    listener = new Map();
    private lstLanguage: LanguageModel[] = [];
    private change : (isLTR: boolean) => void ;
    private currentLanguage; 
    constructor(private platform: Platform, private translateService: TranslateService) {
        let lang = new LanguageModel();
        lang.direction = "ltr";
        lang.name = "en";
        lang.value = "English";
        this.lstLanguage.push(lang);
        lang = new LanguageModel();
        lang.direction = "rtl";
        lang.name = "ar-AE";
        lang.value = "Saudi Arabia";
        this.lstLanguage.push(lang);
        lang = new LanguageModel();
        lang.direction = "ltr";
        lang.name = "es";
        lang.value = "Español";
        this.lstLanguage.push(lang);
        this.currentLanguage =  this.get(LocalSettingModel.lang);
    }
    get(id: string): LanguageModel {
        let language = this.lstLanguage.find(_item => {
            return _item.name === id;
        })
        return language;
    }
    onDirectionChanged(fn: (isLTR: boolean) => void) {
        let key = Math.random();
        this.listener.set(key,fn);
        fn(this.currentLanguage.direction == Config.direction.rtl ? true : false);
        return {
            unsubscribe: () => {
                this.listener.delete(key);
            }
        }
    }
    setDirectionChanged() {
        this.listener.forEach(element => {
            element( this.currentLanguage.direction == Config.direction.rtl ? true : false);
            // allow subcrible 
         });
    }
    changeLanguage(lang: string) {
        this.currentLanguage =  this.get(lang);
       // LocalSettingModel.direction = language.direction;
        // LocalSettingModel.culture = language.culture;
        LocalSettingModel.lang = lang;
        this.platform.ready().then(() => {
            // this.platform.setDir(<DocumentDirection>  this.currentLanguage.direction, true);
            this.translateService.use(LocalSettingModel.lang);
            this.setDirectionChanged();
        });
    }
    search(): LanguageModel[] {
        return this.lstLanguage;
    }
}

export class LanguageModel {
    name: string
    value: string
    culture: string
    direction: string
}