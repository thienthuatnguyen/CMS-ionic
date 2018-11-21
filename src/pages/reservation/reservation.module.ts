import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReservationPage } from './reservation';

@NgModule({
  declarations: [
    ReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReservationPage
  ]
})
export class ReservationPageModule { }

