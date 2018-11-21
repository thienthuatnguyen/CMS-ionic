import { NgModule } from '@angular/core';
import { HoursMinutesSeconds } from './hours-minutes-seconds/hours-minutes-seconds';
import { TimeDuration } from './time-duration/time-duration';
@NgModule({
	declarations: [HoursMinutesSeconds, TimeDuration
    ],
	imports: [],
	exports: [HoursMinutesSeconds, TimeDuration
    ]
})
export class PipesModule {}
