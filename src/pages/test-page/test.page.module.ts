import { NgModule } from "@angular/core";
import { TestPage } from "./test.page";
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";
import { ComponentModule } from "../../component/component.module";

@NgModule({
    declarations: [
        TestPage,
    ],
    imports: [
        IonicPageModule.forChild(TestPage),
        TranslateModule.forChild(),
        ComponentModule
    ],
    exports: [
        TestPage
    ]
})
export class TestPageModule {

}