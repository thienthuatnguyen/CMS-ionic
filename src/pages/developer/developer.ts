import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { IvtStorageService } from '@ivt/security';
import { DeveloperService } from '../../services/developer.service';

@IonicPage()
@Component({
  selector: 'page-developer',
  templateUrl: './developer.html'
})
export class DeveloperPage {
  array: any = [];
  arraySearch : any = [];
  arrayStore : any = [];
  txt: string;
  constructor( developerService: DeveloperService) { 
   
    this.array = developerService.array;
    this.arrayStore = developerService.array;
  }
  clearLog() {
    this.array = [];
  }

  searchByKeyWord($event){
    if (this.txt) {
      this.arraySearch = this.array.filter(el => {
        return el.indexOf(this.txt) > -1 ;
      });
      this.array = this.arraySearch;
    }
    else {
      this.array = this.arrayStore;
   }
    
  }
}
