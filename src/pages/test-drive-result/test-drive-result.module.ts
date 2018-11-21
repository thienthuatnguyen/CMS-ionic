import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDriveResultPage } from './test-drive-result';
import {TranslateModule} from "@ngx-translate/core";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    TestDriveResultPage,
  ],
  imports: [
    IonicPageModule.forChild(TestDriveResultPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class TestDriveResultPageModule {}
