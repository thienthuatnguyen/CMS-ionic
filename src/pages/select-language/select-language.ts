import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageService } from '../../services/language.service';
import { LocalSettingModel } from '../../models/config/local.setting.model';

@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html'
})
export class SelectLanguagePage {
    currentlanguage: any;
    langList: { name: string; value: string; culture: string, direction: string }[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private languageService: LanguageService
    ) {
        this.langList = this.languageService.search();
        this.currentlanguage = LocalSettingModel.lang;
    }

    selectLanguage() {
        this.languageService.changeLanguage(this.currentlanguage);
    }

    cancel() {
        this.navCtrl.pop();
    }
}
