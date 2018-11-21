import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualPage } from './manual';
import {TranslateModule} from "@ngx-translate/core";
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    ManualPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualPage),
    TranslateModule.forChild(),
    PdfViewerModule
  ],
})
export class ManualPageModule {}
