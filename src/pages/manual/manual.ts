import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Gesture } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Utils } from '../../services/util.service';
import { TranslateService } from '@ngx-translate/core/src/translate.service';
import { FileService } from '../../services/file.service';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  @ViewChild('pinchElement') pinchElement;
  private gesture: Gesture;
  private currentZoom = 1;
  
  pdfSrc: string;// = '/assets/doc/SmartTestDriveManual.pdf';
  loading: any;

  manual: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private file: File,
    private utils: Utils,
    private loadingCtrl: LoadingController,
    private translateService: TranslateService,
    private fileService: FileService
  ) {
  }

  ionViewDidLoad() {
    this.loadPdfBrowser();

     // create a new Gesture instance hooked to the DOM element
     this.gesture = new Gesture(this.pinchElement.nativeElement);

     // start listening for ...
     this.gesture.listen();

      // ... the pinchstart event
    this.gesture.on('pinchstart', (e) => {
    });

    // ... for the pinch event
    this.gesture.on('pinch', (e) => {
    });
 
     this.gesture.on('pinchend', (event) => {
      // get the current zoom value
      let zoom = this.currentZoom;
      // get the scaled amount
      const scale = zoom * event.scale / 10;
      // if the user is zooming in
      if (event.additionalEvent === 'pinchout') {
        zoom += scale;
      } else {
        // if zooming out
        zoom -= scale * 10;
      }

      // if zoom is too small or too big set them to max values
      if (zoom < 1) {
        zoom = 1;
      } else if (zoom > 2) {
        zoom = 2;
      }

      // set the current zoom
      this.currentZoom = zoom;
     });
  }

  public ngOnDestroy() {
    
    // stop listening
    this.gesture.destroy();
  }

  openManual(idx) {
    alert(idx + 1 + "번째 manual open")
  }

  async loadPdf(path: string) {
    return new Promise<string>((resolve, reject) => {
  
      const request = new XMLHttpRequest();
      request.open('GET', path, true);
      request.responseType = 'blob';
  
      request.onload = () => {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          this.loading.dismiss();
          resolve(e.target.result);
        }
        reader.onerror = err => {
          this.loading.dismiss();
          reject(err);
        } 
        reader.readAsDataURL(request.response);
      };
  
      request.send();
    });
  }

  async loadPdfBrowser() {
    this.loading = this.loadingCtrl.create({
      content: this.translateService.instant('msg.loading')
    });
    this.loading.present();

    this.fileService.downloadUserManual().then(_blob => {
      this.pdfSrc = _blob;
      this.loading.dismiss();
    })


    //this.pdfSrc = await this.loadPdf(this.file.applicationDirectory + 'www' + this.pdfSrc);
  }
}
