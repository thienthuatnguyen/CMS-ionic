import {Injectable, Pipe, PipeTransform} from '@angular/core';
//import * as _moment from 'moment';
import * as moment from 'moment';

// const Moment = _moment;
/**
 * Generated class for the HoursMinutesSecondsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'hoursMinutesSeconds',
})
export class HoursMinutesSeconds implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  transform(value, args?) {

    // let sec_num = parseInt(value, 10);
    let momentDateString = moment((parseInt(value)*1000)).utcOffset(0).format('HH:mm:ss')

    // momentDateString =(parseInt(value)*1000)



    // let momentDateString = moment(new Date(sec_num)).format('hh:mm:ss')
    return momentDateString;
  }
    /*if (hours != 0) {
      time = hours+":";
    }
    if (minutes != 0 || time !== "") {npm
      minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
      time += minutes+":";
    }
    if (time === "") {
      time = seconds+"s";
    }
    else {
      time += (seconds < 10) ? "0"+seconds : String(seconds);
    }
    return time;
  }*/
}
