export class PersonalData {
  Name: string;
  Age: number;
  Gender: string;
  HighRiskGroup: boolean;
}

export class Location {
  Hospital: string;
  Department: string;
  RoomNumber: number;
  BedNumber: number;
  BedLocation: string;
}


export class HospitalizationInfo {
  ReceptionTime;
  ReleaseTime;
  HospitalizationStatus;
  Comments;
}

export class PersonSettings {
  // settings info
  minHR: number;
  maxHR: number;
  minBR: number;
  maxBR: number;
  minSpO2: number;
  maxSpO2: number;
  sensors;
}

export class AlertData {
  name: string;
  time: Date;
}

export class PersonHistory {
  alerts: AlertData[];
  scoring: number[];
}

export class PersonHealthData {
  PatientID;
  personal: PersonalData;
  location: Location;
  hospitalization: HospitalizationInfo;
  //health data
  heartRate: number;
  bloodPresure;
  spO2:number;
  breathingRate:number;
  extraO2;
  fever;
  breathingInfo;
  alerts;
  progress;
  score:number;
  history: PersonHistory;
  settings: PersonSettings;
}

export const DEFAULT_HOSPITAL = 'Asuta';

export const DEFAULT_PERSON_LOCATION: Location = {
  Hospital: DEFAULT_HOSPITAL,
  Department: 'B',
  RoomNumber: 100,
  BedNumber: 5,
  BedLocation: ''
}

export const DEFAULT_PERSON_SETTINGS: PersonSettings = {
  minHR: 51, 
  maxHR: 90,
  minBR: 12, 
  maxBR: 20, 
  minSpO2: 96, 
  maxSpO2: 100, 
  sensors:[]
}

export const DEFAULT_PERSON_HISTORY = {
  alerts: [],
  scoring: []
}

export const HEALTH_DATA: PersonHealthData[] = [
  {PatientID:1, 
    personal:{Name: 'Ron', Age: 15, Gender: 'male', HighRiskGroup: false},
    location: DEFAULT_PERSON_LOCATION, 
    hospitalization: null,
    heartRate: 68, bloodPresure: '120/80', spO2: 99,
    breathingRate:12, extraO2: 'NO', fever:37, breathingInfo: '',
    alerts: '', progress: '', score: 0, 
    history: DEFAULT_PERSON_HISTORY ,settings: DEFAULT_PERSON_SETTINGS},

  {PatientID:2, 
    personal:{Name: 'Dor', Age: 35, Gender: 'male', HighRiskGroup: true},
    location: DEFAULT_PERSON_LOCATION,  
    hospitalization: null,
    heartRate: 68, bloodPresure: '120/80', spO2: 99, 
    breathingRate:12, extraO2: 'YES', fever:37, breathingInfo: '',
    alerts: '', progress: '', score: 7, 
    history: {alerts: [{name:'no pulse', time: new Date()},
             {name:'no breath', time: new Date()}], scoring: [1,5,5,4,3,2,2,0]} ,
             settings: DEFAULT_PERSON_SETTINGS}
]

export const SENSORS = [{UnitID: 'None', Name:'None', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '100', Name:'Sensor1', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '101', Name:'Sensor2', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '102', Name:'Sensor3', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '103', Name:'Sensor4',  Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '104', Name:'Sensor5', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '105', Name:'Sensor6', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '106', Name:'Sensor7', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '107', Name:'Sensor8', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '108', Name:'Sensor9', Vendor: 'EarlySense', PatientID: -1},
                        {UnitID: '109', Name:'Sensor10', Vendor: 'EarlySense', PatientID: -1},]