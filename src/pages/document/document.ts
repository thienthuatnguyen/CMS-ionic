import {Component, ViewChild, QueryList, ViewChildren, HostListener} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {DomSanitizer} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {ListMasterPage} from "../list-master/list-master";
import {MainPage} from "../index";
import { ReservationDocument, ReservationModel } from '../../models/reservation/reservation.model';
import { DocumentService } from '../../services/document.service';
import { FileService } from '../../services/file.service';
import moment from 'moment';
import { Config } from '../../app/app.config';
import { ToastService } from '../../services/toast.service';
import { Util } from '../../providers/util';// import { Validators, FormControl, FormGroup } from '@angular/forms';
import { CameraComponent } from '../../component/camera/camera.component';
import { Picture } from '../../models/picture.model';
import { IvtSecurityService } from '@ivt/security';
import { TermsOfServiceModal } from './terms-of-service-modal/terms-of-service-modal'
// import {SignaturePad2} from "angular2-signaturepad/signature-pad2";

/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
  consultantSignedTime: Date;
  customerSignedTime: Date;
  // form: FormGroup;
  private sendImage: string;
  public photos_front: any;
  public photos_back: any;
  private base64Prefix: string = 'data:image/jpeg;base64,';
  item: ReservationDocument;
  salutationEnum: any;
  termAndCondition: string;
  isDrawing = false;
  documentObj: any = {
    reservationStatus : null,
    consultantUserId: null,
    consultantUrlBlob: null,
    consultantSign: false,
    customerUrlBlob: null,
    customerSign:false
  };
  consultantUrl: string;
  customerUrl: string;
  frontUrl: string;
  backUrl: string;
  frontPicture: Picture;
  backPicture: Picture;
  frontPictures: Picture []= [];
  backPictures: Picture []= [];
  displayDateFormat = Config.date.displayShortTime;
  @ViewChild('customerSignPad') customerSignPad: SignaturePad;
  @ViewChild('consultantSignPad') consultantSignPad: SignaturePad;
  @ViewChild(CameraComponent) private cameraComponent: CameraComponent;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeCanvas();
  }

  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'backgroundColor': '#ffffff',
    'penColor': '#666a73'
  };


  constructor(public domSanitizer: DomSanitizer,
              public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
              private alertCtrl: AlertController, private translateService: TranslateService,
              private documentService: DocumentService, private util: Util, private fileService: FileService,
              private toastService: ToastService, private securityService: IvtSecurityService, private modalCtrl: ModalController
  ) {
    this.salutationEnum = [
                           {name:'document.male', value:'Male'},
                           {name:'document.female', value:'Female'}
                         ]
    
    let userInfor = this.securityService.getUser();
    this.documentObj.consultantUserId = userInfor.id;
    if(userInfor && userInfor.tenant)
      this.termAndCondition = userInfor.tenant.termsAndConditions;

    let reservationFromServer = navParams.data.item as ReservationModel;
    this.documentObj.reservationStatus = reservationFromServer.applicationStatusEnum; 
    this.item = util.transformToDocument(reservationFromServer);

    if(this.item.customerSignedTime)
      this.customerSignedTime = moment(this.item.customerSignedTime, Config.date.YYYYMMDD).toDate();
    if(this.item.customerSignedTime)
      this.consultantSignedTime = moment(this.item.consultantSignedTime, Config.date.YYYYMMDD).toDate();

    if(this.item.customerSignatureId){
      fileService.download(this.item.customerSignatureId).then(result=>{
        this.customerUrl = result;
      })
      this.documentObj.customerUrlBlob = this.item.customerSignatureId;
    }
    if(this.item.consultantSignatureId){
      fileService.download(this.item.consultantSignatureId).then(result=>{
        this.consultantUrl = result;
      })
      this.documentObj.consultantUrlBlob = this.item.consultantSignatureId;
    }
    if(this.item.driverLicenseFrontSidePictureId){
      fileService.download(this.item.driverLicenseFrontSidePictureId).then(result=>{
        this.frontPicture = new Picture();
        this.frontPicture.id = this.item.driverLicenseFrontSidePictureId;
        this.frontPicture.url = result;
        this.frontPictures.push(this.frontPicture);
        this.frontUrl = result;
        
      })
    }
    if(this.item.driverLicenseBackSidePictureId){
      fileService.download(this.item.driverLicenseBackSidePictureId).then(result=>{
        this.backPicture = new Picture();
        this.backPicture.id = this.item.driverLicenseFrontSidePictureId;
        this.backPicture.url = result;
        this.backPictures.push(this.backPicture);
        this.backUrl = result;
      })
    }
  }
  resizeCanvas() {
    let customerImg = null;
    let consultantImg = null;
    if (this.customerSignPad) {
      if(!this.customerSignPad.isEmpty()) {
        customerImg = this.customerSignPad.toDataURL();
      }
    } 

    if (this.consultantSignPad && !this.consultantSignPad.isEmpty()) {
      consultantImg = this.consultantSignPad.toDataURL();
    }

    if(this.customerSignPad)
        this.customerSignPad.resizeCanvas();
    if(this.consultantSignPad)
        this.consultantSignPad.resizeCanvas();

    if (this.customerSignPad && customerImg) {
      this.customerSignPad.fromDataURL(customerImg);
    }

    if (this.consultantSignPad && consultantImg) {
      this.consultantSignPad.fromDataURL(consultantImg);
    }
  }

  ngOnInit() {
    this.photos_front = [];
    this.photos_back = [];
  }

  ionViewDidEnter() {
    this.resizeCanvas();
    if(this.customerSignPad)
      this.customerSignPad.clear();
    if(this.consultantSignPad)
      this.consultantSignPad.clear();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentPage');
  }

  isOwnReservation(): boolean {
    if (this.item.consultantUserId)
      return this.item.consultantUserId == this.documentObj.consultantUserId
    return true;
  }

  isDoneReservation (): boolean{
    return this.util.isDoneReservation(this.documentObj.reservationStatus);
  }
  takePic(photos) {

    try {
      const options: CameraOptions = {
        quality: 50,
        // destinationType: this.camera.DestinationType.FILE_URI,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then(
        (imageData) => {
          // this.base64Image = this.urlPrefix + imageData;
          const safeUrl: any = this.base64Prefix + imageData;
          photos.push(safeUrl);
          photos.reverse();
        },
        (err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err)
    }

  }

  drawComplete(selector) {
    this.isDrawing = false;
    if (selector == 'customer') {
      this.documentObj.customerUrlBlob = this.customerSignPad.toDataURL();
      this.documentObj.customerSign = true;
    }
    else{
      this.documentObj.consultantUrlBlob = this.consultantSignPad.toDataURL();
      this.documentObj.consultantSign = true;
    }
  }

  drawStart() {
    this.isDrawing = true;
  }

  saveCustomerSignature() {
   return this.fileService.upload(this.documentObj.customerUrlBlob, {mimeType: ".png"});
  }
  saveConsultantSignature(){
    return this.fileService.upload(this.documentObj.consultantUrlBlob, {mimeType: ".png"});
    
  }
  clearPad(selector) {
    if (selector == 'customer') {
      this.customerSignPad.clear();
      this.documentObj.customerUrlBlob = null;
      this.documentObj.customerSign = false;
    }
    else if (selector == 'consultant') {
      this.consultantSignPad.clear();
      this.documentObj.consultantUrlBlob = null;
      this.documentObj.consultantSign = false;
    }
  }
  cancel(){
    this.navCtrl.pop();
  }
  private saveDocument(){
    this.documentService.save(this.item).subscribe(success=>{
      this.navCtrl.pop();
    },fail => {
      this.toastService.error(fail.message);
    })
  }
   save() {
    if(!this.item.isAgreedWithPrivacyPolicy){
      this.toastService.error(this.translateService.instant('reservation.validation.term_of_service_message'));
      return;
    }
    let alert =  this.alertCtrl.create({
      title: this.translateService.instant('msg.confirm_title'),
      message: this.translateService.instant('msg.are_you_sure_you_want_to_save'),
      buttons: [
        {
          text: this.translateService.instant('CANCEL_BUTTON'),
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: this.translateService.instant('SAVE_BUTTON'),
           handler: () => {
             if(this.item.isAgreedWithPrivacyPolicy){
              this._updateDocument();
             } 
             else{
              this.toastService.error(this.translateService.instant('reservation.validation.term_of_service_message'));
             }
            
          }
        }
      ]
    });
    alert.present();
  }

  uploadPhotos() {
    return this.cameraComponent.upload().then(_result => {
      if (_result._frontPictures.length > 0) {
        this.item.driverLicenseFrontSidePictureId = _result._frontPictures[0].id;
        this.frontUrl = _result._frontPictures[0].url;
      }
      else {
        this.item.driverLicenseFrontSidePictureId = null;
        this.frontUrl = null;
      }
      if (_result._backPictures.length > 0) {
        this.item.driverLicenseBackSidePictureId = _result._backPictures[0].id;
        this.backUrl = _result._backPictures[0].url;
      }
      else {
        this.item.driverLicenseBackSidePictureId = null;
        this.backUrl = null;
      }
    })
  }

  showTerms(showTerms: any) {
    let profileModal = this.modalCtrl.create('TermsOfServiceModal', {showTerms: showTerms}, {
      cssClass: 'full-modal'
  });
    profileModal.present();
  }

  private async _updateDocument(){
    let customerResult;
    let consultantResult;
    await this.uploadPhotos();
    if(this.documentObj.customerSign){
      customerResult = await this.saveCustomerSignature()
      this.item.customerSignatureId = customerResult;
      this.item.customerSignedTime = moment();
    }
    if(this.documentObj.consultantSign){
      consultantResult = await this.saveConsultantSignature();
      this.item.consultantSignatureId = consultantResult;    
      this.item.consultantSignedTime = moment();
    }
    this.saveDocument();
  }
}
