import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsOfServiceModal } from './terms-of-service-modal';


@NgModule({
  declarations: [
    TermsOfServiceModal,
  ],
  imports: [
    IonicPageModule.forChild(TermsOfServiceModal),
    TranslateModule.forChild()
  ],
  exports: [
    TermsOfServiceModal
  ]
})
export class TermsOfServiceModalModule { }
