import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterPage } from './list-master';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    PipesModule,
    ComponentModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
