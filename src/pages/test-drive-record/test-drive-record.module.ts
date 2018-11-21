import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDriveRecordPage } from './test-drive-record';
import {TranslateModule} from "@ngx-translate/core";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    TestDriveRecordPage
  ],
  imports: [
    IonicPageModule.forChild(TestDriveRecordPage),
    TranslateModule.forChild(),
    PipesModule
  ]
})
export class TestDriveRecordPageModule {}
