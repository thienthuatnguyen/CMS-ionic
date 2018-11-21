import { IvtHttpService, IvtHttpClientConfig } from '@ivt/http-client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationModel, Reservation } from '../models/reservation/reservation.model';
import { Config } from '../app/app.config';
import { Observable } from 'rxjs/Observable';
import moment from 'moment';
import { ReservationTimeSlotModel } from '../models/reservation/reservation.timeslot.model';
import { UIAwareHttpService } from './ui.aware.http.service';
import { UIHttpInjector } from './ui.http.injector';
@Injectable()
export class ReservationService extends UIAwareHttpService<any> {
    constructor(
        http: HttpClient,
        config: IvtHttpClientConfig,
        injector: UIHttpInjector
    ) {
        super(http, '', ReservationModel, config, injector);
    }
    /**
     * 
     * @param searchCriteria {
         appointmentFromDateLocal: "2018-05-09",
         appointmentToDateLocal: "2018-05-09",
     * }
     */
    getReservationList(searchCriteria: any): Observable<ReservationModel[]> {
        this.url = Config.api.GetApplicationsForApp;
        searchCriteria.appointmentFromDateLocal = moment(searchCriteria.appointmentFromDateLocal).locale(Config.moment.locale).format(Config.date.YYYYMMDD);
        if(searchCriteria.appointmentToDateLocal){
            searchCriteria.appointmentToDateLocal = moment(searchCriteria.appointmentToDateLocal).locale(Config.moment.locale).format(Config.date.YYYYMMDD);
        }
        return super.search(searchCriteria);
    }

    save(reservation: Reservation): Observable<Reservation> {
        this.url = Config.api.CreateOrUpdateReservationForApp;
        return super.save(reservation);
    }

    cancel(item: any): Observable<Reservation> {
        this.url = Config.api.CancelReservation;
        return super.save(item);
    }

    /**
      * 
      * @param searchCriteria {
         consultantUserId: 1,
         vehicleId: 1,
         appointmentDateLocal: "2018-05-05"
      * }
      */
    getAvailableReservationTimeSlots(searchCriteria: any): Observable<ReservationTimeSlotModel[]> {
        this.url = Config.api.GetAvailableReservationTimeSlots;
        return super.search(searchCriteria)
    }


}