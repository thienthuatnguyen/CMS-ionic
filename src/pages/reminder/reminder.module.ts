import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ReminderPage } from './reminder';

@NgModule({
  declarations: [
    ReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(ReminderPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReminderPage
  ]
})
export class ReminderPageModule { }
