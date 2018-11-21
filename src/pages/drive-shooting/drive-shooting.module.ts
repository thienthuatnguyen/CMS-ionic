import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { DriveShootingPage } from './drive-shooting';

@NgModule({
  declarations: [
    DriveShootingPage,
  ],
  imports: [
    IonicPageModule.forChild(DriveShootingPage),
    TranslateModule.forChild()
  ],
  exports: [
    DriveShootingPage
  ]
})
export class DriveShootingPageModule { }
