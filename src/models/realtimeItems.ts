export class RealTimeItems {

  constructor(public drivingRawRecordId: number,
              public reservationId: number,
              public lastChecked: Date,
              public totalSeconds: number, //drivenDurationInSec
              public active: boolean) {

  }

/*
  setLastChecked(lastChecked: Date): void {
    this.lastChecked = lastChecked;
  }

  addToTotalSeconds(totalSeconds: number): void {
    this.totalSeconds += totalSeconds;
  }

  deductFromTotalSeconds(totalSeconds: number): void {
    this.totalSeconds -= totalSeconds;
  }

  setIsActive(active: boolean): void {
    this.active = active;
  }*/
}
