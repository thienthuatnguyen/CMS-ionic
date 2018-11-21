import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeProfilePage } from './change-profile';

@NgModule({
  declarations: [
    ChangeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeProfilePage),
    TranslateModule.forChild()
  ],
  exports: [
    ChangeProfilePage
  ]
})
export class ChangeProfilePageModule { }
