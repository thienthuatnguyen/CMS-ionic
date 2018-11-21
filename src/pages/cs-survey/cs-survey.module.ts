import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsSurveyPage } from './cs-survey';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    CsSurveyPage
  ],
  imports: [
    IonicPageModule.forChild(CsSurveyPage),
    TranslateModule.forChild()
  ],
})
export class CsSurveyPageModule {}
