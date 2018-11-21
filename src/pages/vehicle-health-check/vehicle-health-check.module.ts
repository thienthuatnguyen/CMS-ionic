import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleHealthCheckPage } from './vehicle-health-check';
// import { HistoryDetailPage } from './vehicle-health-check';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VehicleHealthCheckPage,

  ],
  imports: [
    IonicPageModule.forChild(VehicleHealthCheckPage),
    TranslateModule.forChild()
  ],
  entryComponents:[
  ]
})
export class VehicleHealthCheckPageModule {}
