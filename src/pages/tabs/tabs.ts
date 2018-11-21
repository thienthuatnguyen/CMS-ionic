import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'ListMasterPage';
  tab2Root: any = 'ReservationPage';
  tab3Root: any = 'ReservationListPage';
  tab4Root: any = 'CsSurveyPage';

  seltabix: number;


  constructor(public navCtrl: NavController, public translateService: TranslateService, np: NavParams) {
    this.seltabix = np.get('opentab');
  }

  openPage(ev) {
    if (ev.length() > 1) {
      ev.popToRoot();
    }
  }
}
