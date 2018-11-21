import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleListPage } from './vehicle-list';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    VehicleListPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleListPage),
    TranslateModule.forChild(),
  ],
  entryComponents:[
    VehicleListPage
  ],

})
export class VehicleListPageModule {}
  