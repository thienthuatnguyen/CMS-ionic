import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentPage } from './document';
import {TranslateModule} from "@ngx-translate/core";
import {SignaturePadModule} from "angular2-signaturepad";
import { ComponentModule } from '../../component/component.module';

// import {SignaturePadModule2} from "angular2-signaturepad";

@NgModule({
  declarations: [
    DocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentPage),
    TranslateModule.forChild(),
    SignaturePadModule,
    ComponentModule
    // SignaturePadModule2
  ],
  entryComponents:[
    DocumentPage
  ]
})
export class DocumentPageModule {}
