import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { DeveloperPage } from './developer';

@NgModule({
  declarations: [
    DeveloperPage,
  ],
  imports: [
    IonicPageModule.forChild(DeveloperPage),
    TranslateModule.forChild()
  ],
  exports: [
    DeveloperPage
  ]
})
export class DeveloperPageModule { }
