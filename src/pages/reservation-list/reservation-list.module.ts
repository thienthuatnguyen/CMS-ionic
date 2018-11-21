import { NgModule, Pipe } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReservationListPage } from './reservation-list';

@NgModule({
  declarations: [
    ReservationListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationListPage),
    TranslateModule.forChild()

  ],
})
export class ReservationListPageModule {}
