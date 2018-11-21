export class ReservationTimeSlotModel {
     id: string;
     tenantId: string;
     timeInHHMM: string;
     durationInMinute: number;
     assignedToMe: boolean;
     assignedToOtherConsultantUser: boolean;
     assignedToThisVehicle: boolean;
     timeSelected: boolean;
}
