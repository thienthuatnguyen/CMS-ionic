export class TestDrivingModel {


  /*
    items: Array<{_vehicleId: number, _lastChecked: Date, _totalSeconds:number, _active: boolean, _recordId: number, _vehicleDrivingStatusEnum: string, _currentLatitude: number, _currentLongitude: number}>*/
  constructor(private _reservationId: number, //reservation Id
              private _active: boolean, //활성상태
              private _recordId: number, //각 레코드의 아이디값. StartDrivingRecord로 부터 response 받는 값.
              private _currentLatitude: number, //startLatitude, endLatitude
              private _currentLongitude: number, // startLongitude, endLongitude
              private _currentTime: Date //driveEndTime, driveStartTime
  ) {



  }


  setVehicleId(vehicleId: number): void {
    this._reservationId = vehicleId; //vehicle id
  }

  setRecordId(recordId: number): void {
    this._recordId = recordId; //record id
  }

  setCurrentLatitude(currentLatitude: number): void {
    this._currentLatitude = currentLatitude;
  }

  setCurrentLongitude(currentLongitude: number): void {
    this._currentLongitude = currentLongitude;
  }

  setCurrentTime(currentTime: Date): void {
    this._currentTime = currentTime;
  }


}

export class TestdrivingRawRecordForLocal {

  public latitude: any
  public longitude: any
  public accuracy: any
  public speed: any
  public heading: any
  public recordOrder: any
  public recordTime: any


}
