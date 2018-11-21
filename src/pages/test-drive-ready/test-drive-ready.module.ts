import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDriveReadyPage } from './test-drive-ready';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TestDriveReadyPage,
  ],
  imports: [
    IonicPageModule.forChild(TestDriveReadyPage),
    TranslateModule.forChild()
  ]
})
export class TestDriveReadyPageModule {}
