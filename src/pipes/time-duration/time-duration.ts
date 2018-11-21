import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import { Config } from '../../app/app.config';
@Pipe({
  name: 'timeDuration',
})
export class TimeDuration implements PipeTransform {
  transform(value, args?) {
    const day = 60 * 60 * 24;
    let timeDuration = '';

    if(value > day) {
        timeDuration = Math.floor(value / day) + 'D+';
    }
    else {
      let time = moment((parseInt(value)*1000)).utcOffset(0);
      timeDuration = time.locale(Config.moment.locale).format('H') + 'H ' + time.locale(Config.moment.locale).format('mm') + 'M';
    }
    
    return timeDuration;
  }
}
