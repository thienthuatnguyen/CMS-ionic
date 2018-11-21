import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageModal } from './image-modal';


@NgModule({
  declarations: [
    ImageModal,
  ],
  imports: [
    IonicPageModule.forChild(ImageModal),
    TranslateModule.forChild()
  ],
  exports: [
    ImageModal
  ]
})
export class ImageModalModule { }
