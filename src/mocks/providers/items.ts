import {Injectable} from '@angular/core';

import {Item} from '../../models/item';
import * as moment from 'moment';

@Injectable()
export class Items {
  items: Item[] = [];

  today : any = moment().format('MM/DD/YYYY'); //목업 데이터용


  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    //실제 아이템 값
    let items = [
      {
        "name": "SONATA (23더 1123)",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": 1,
        "userId": "admin",
        "progress": "In Progress",
        "time":"09 : 30",
        "date": this.today,
        "ApplicationStatusEnum": "",
        "userName":"Lee Jaeho",
        "consultantName":"Woosuk Oh",
        "finishRideTime": moment().format('DD/hh'),
        "location": "서울 송파구 마천로 87"
      },
      {
        "name": "TUCSON (52더 3679)",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": 4,
        "userId": "admin",
        "progress": "Upcoming",
        "time":"09 : 30",
        "date": this.today,
        "ApplicationStatusEnum": "Appointment"
      },
      {
        "name": "SANTA FE (66가 7273)",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": 5,
        "userId": "admin",
        "progress": "Complete",
        "time":"09 : 30",
        "date": this.today,
        "ApplicationStatusEnum": ""
      },
      {
        "name": "I30 (32가 7051)",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": 6,
        "time":"09 : 30",
        "progress": "Complete",
        "date": this.today,
        "ApplicationStatusEnum": ""
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": 7,
        "time":"09 : 30",
        "progress": "Upcoming",
        "date": this.today,
        "ApplicationStatusEnum": "Appointment"
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": 6,
        "time":"09 : 30",
        "progress": "In Progress",
        "date": this.today,
        "ApplicationStatusEnum": "NoShow"
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": 4,
        "time":"09 : 30",
        "progress": "Upcoming",
        "date": this.today,
        "ApplicationStatusEnum": "Appointment"
      }
    ];

    //만들어둔 모델에 값 넣는곳.
    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }
    let paramNum = Object.keys(params).length;
    let result
    // console.log(params.name)


    // if(paramNum == 1){
    return this.items.filter((items) => {

              if(params.userId == undefined && params.name == undefined){
                  return 1 //전체검색
              }
              else if(!(params.userId == undefined) && params.name == undefined){
                return items.userId == params.userId //내예약건만 검색
              }
              else if(params.userId == undefined && !(params.name == undefined)){
                return items.name.toLowerCase().indexOf(params.name.toLowerCase())>=0 //서치바에 입력한 값이 포함된 값 출력
              }
              else if(!(params.userId == undefined) && !(params.name == undefined)){
                return items.userId == params.userId && items.name.toLowerCase().indexOf(params.name.toLowerCase())>=0
                // 서치바 입력값 + 내예약건만 검색
              }


      return null;
    });
    // }else if(paramNum == 2){
    //
    // }


  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
