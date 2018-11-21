import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    TranslateModule.forChild(),
    IonicModule
  ],
  exports: [
    CameraComponent
  ]
})
export class ComponentModule {}
