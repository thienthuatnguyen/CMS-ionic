import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleRegistrationTakepicGuidePage } from './vehicle-registration-takepic-guide';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VehicleRegistrationTakepicGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleRegistrationTakepicGuidePage),
    TranslateModule.forChild()
  ]
})
export class VehicleRegistrationTakepicGuidePageModule {}
