import { PatientsListService } from './../../services/patients-list.service';
import { CurrPersonService } from './../../services/curr-person.service';
import { Router } from '@angular/router';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         Location,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         DEFAULT_HOSPITAL,
         DEFAULT_PERSON_LOCATION,
         HEALTH_DATA,
         SENSORS } from './../../interfaces/PersonData';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

const Months = [
  {num: 1, name:'January'},
  {num: 2, name:'February'},
  {num: 3, name:'March'},
  {num: 4, name:'April'},
  {num: 5, name:'May'},
  {num: 6, name:'June'},
  {num: 7, name:'July'},
  {num: 8, name:'August'},
  {num: 9, name:'September'},
  {num: 10, name:'October'},
  {num: 11, name:'November'},
  {num: 12, name:'December'}
]

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})

export class NewPatientComponent implements OnInit {
  @ViewChild('table',null) table: MatTable<any>;
  newId: number;

  firstName: string = 'Write fisrt name here...';
  lastName: string = 'Write last name here...';
  day: number;
  month;
  year: number;
  inRisk: boolean = false;

  sensor = {UnitID: 'None', Name:'None', Vendor: 'EarlySense', PatientID: -1};

  displayedColumns: string[] = ['UnitID', 'Name', 'Vendor', 'remove'];
  sensorsDataSource = [];

  daysLst;
  monthsLst;
  yearsLst;

  sensors = [];

  remarks: string = 'Write remarks here...'

  hospital = DEFAULT_HOSPITAL;
  department: string;
  roomNumber: number;
  bedNumber: number;
  bedLocation: string;

  minHR: number = DEFAULT_PERSON_SETTINGS.minHR;
  maxHR: number = DEFAULT_PERSON_SETTINGS.maxHR;

  minSpO2: number = DEFAULT_PERSON_SETTINGS.minSpO2;
  maxSpO2: number = DEFAULT_PERSON_SETTINGS.maxSpO2;

  minBR: number = DEFAULT_PERSON_SETTINGS.minBR;
  maxBR: number = DEFAULT_PERSON_SETTINGS.maxBR;

  constructor(private router:Router, 
              // private patientListService: PatientsListService,
              private currPersonService: CurrPersonService) { 
    this.currPersonService.sharedMessage.subscribe(person => {
      this.newId = person.PatientID; 
      //console.log(this.newId)     
      this.daysLst = this.incRange(1,31);
      this.monthsLst = Months;
      this.yearsLst = this.decRange(1920, 2020);

      this.setSensors();

    })
    
  }

  ngOnInit() {
  }

  decRange(start, end) {
    return Array.from({length: (end - start + 1)}, (v, k) => (end - k));
  }

  incRange(start, end) {
    return Array.from({length: (end - start + 1)}, (v, k) => (start+k));
  }

  AddSensorToPatient() {
    if(this.sensor.UnitID === 'None'){
      return;
    }
    this.sensor.PatientID = this.newId;
    const newPatientSensor = {
      UnitID: this.sensor.UnitID,
      Name: this.sensor.Name,
      Vendor: this.sensor.Vendor,
      PatientID: this.newId
    }
    this.sensorsDataSource.push(newPatientSensor);
    this.table.renderRows();
    // console.log(this.sensorsDataSource)
    this.sensor = {UnitID: 'None', Name:'None', Vendor: 'EarlySense', PatientID: -1};
    this.setSensors();
  }

  removeSensorFromPatient(element){
    let i = this.sensorsDataSource.indexOf(element);
    this.sensorsDataSource[i].PatientID = -1;
    this.sensorsDataSource.splice(i, 1);
    this.table.renderRows();
    this.setSensors();
  }

  setSensors(){
    this.sensors = [];
    SENSORS.forEach(s => {
      if(s.UnitID !== 'None' && this.checkIfSensorInList(s)){
          s.PatientID = this.newId;
      }
      if(s.PatientID === this.newId && !this.checkIfSensorInList(s)){
          s.PatientID = -1;
      }
      if(s.PatientID === -1) {
        this.sensors.push(s);
      }
    });
  }

  checkIfSensorInList(currSensor){
    for(let i = 0; i < this.sensorsDataSource.length; i++){
      if(this.sensorsDataSource[i].UnitID === currSensor.UnitID){
        return true;
      }
    }
    return false;
  }

  verifyInput(){
    return (this.firstName === 'Write fisrt name here...' ||
     this.day === undefined || this.month === undefined ||
     this.year === undefined || this.department === undefined || this.roomNumber ===undefined ||
     this.bedNumber === undefined) ? false : true;
  }

  OnClick(){
    if(!this.verifyInput()){
      alert('Please check that all of the fields are set properly');
      return;
    }

    if(this.remarks === 'Write remarks here...'){
      this.remarks = '';
    }

    if(this.sensorsDataSource.length === 0) {
      alert('Please choose at least one sensor for the patient');
      return;
    }

    const newPersonSettings: PersonSettings = {
      minHR: this.minHR, 
      maxHR: this.maxHR,
      minBR: this.minBR, 
      maxBR: this.maxBR, 
      minSpO2: this.minSpO2, 
      maxSpO2: this.maxSpO2, 
      sensors: this.sensorsDataSource
    };

    if(this.bedLocation === undefined){
      this.bedLocation = '';
    }

    const newLocation: Location = {
      Hospital: DEFAULT_HOSPITAL,
      Department: this.department,
      RoomNumber: this.roomNumber,
      BedNumber: this.bedNumber,
      BedLocation: this.bedLocation
    }

    const dateOfBirth = new Date(this.year, this.month.num, this.day)
    let timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    if(!this.inRisk) {
      if(age >= 65){
        this.inRisk = true;
      }
    }

    const newPatient: PersonHealthData = {
      PatientID:this.newId, 
      personal: {Name: this.firstName, Age: age, Gender: 'male', HighRiskGroup: this.inRisk},
      location: newLocation,
      hospitalization: null,
      heartRate: 68, 
      bloodPresure: '120/80', 
      spO2: 99,
      breathingRate:12, 
      extraO2: 'NO', 
      fever:37, 
      breathingInfo: '',
      alerts: '',
      progress: '',
      score: 0,
      history: DEFAULT_PERSON_HISTORY ,
      settings: newPersonSettings
    }

    // this.patientListService.newPatient(newPatient);

    HEALTH_DATA.push(newPatient);

    alert('Patient added');

    this.currPersonService.nextMessage(newPatient);
    this.router.navigate(['/patient-data']);
  }
}
