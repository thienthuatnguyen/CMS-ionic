import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleRegistrationPage } from './vehicle-registration';
import { TranslateModule } from "@ngx-translate/core";
import { CameraComponent } from '../../component/camera/camera.component';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  declarations: [
    VehicleRegistrationPage
  ],
  imports: [
    IonicPageModule.forChild(VehicleRegistrationPage),
    TranslateModule.forChild(),
    ComponentModule
  ],
})
export class VehicleRegistrationPageModule {}
