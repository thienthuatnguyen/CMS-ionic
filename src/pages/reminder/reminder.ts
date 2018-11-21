import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { IvtStorageService } from '@ivt/security';

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: './reminder.html'
})
export class ReminderPage {
  items: any = [];
  constructor(private storageService: IvtStorageService) { 
    this.items = this.storageService.get("reminderList");
  }

}
