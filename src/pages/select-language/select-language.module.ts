import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLanguagePage } from './select-language';


@NgModule({
  declarations: [
    SelectLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLanguagePage),
    TranslateModule.forChild()
  ],
  exports: [
    SelectLanguagePage
  ]
})
export class SelectLanguagePageModule { }
