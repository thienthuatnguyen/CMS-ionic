import { Ionic2RatingModule } from "ionic2-rating";
import { SurveyDetailPage } from "./survey.detail.component";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        SurveyDetailPage
    ],
    imports: [
        IonicPageModule.forChild(SurveyDetailPage),
        TranslateModule.forChild(),
        Ionic2RatingModule
    ],
})
export class SurveyDetailModule { }