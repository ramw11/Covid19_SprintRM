import { PatientsListService } from './../../../services/patients-list.service';
import { Router } from '@angular/router';
import { CurrPersonService } from './../../../services/curr-person.service';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         Location,
         DEFAULT_HOSPITAL,
         DEFAULT_PERSON_LOCATION,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         HEALTH_DATA,
         SENSORS } from './../../../interfaces/PersonData';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-patient-settings',
  templateUrl: './patient-settings.component.html',
  styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
  @ViewChild('table',null) table: MatTable<any>;
  
  sensor1 = {UnitID: 'None', Name:'None', Vendor: 'EarlySense', PatientID: -1};
  sensor2 = {UnitID: 'None', Vendor: 'EarlySense', PatientID: -1};
  sensor3 = {UnitID: 'None', Vendor: 'EarlySense', PatientID: -1};
  sensor4 = {UnitID: 'None', Vendor: 'EarlySense', PatientID: -1};
  sensor5 = {UnitID: 'None', Vendor: 'EarlySense', PatientID: -1};

  displayedColumns: string[] = ['UnitID', 'Name', 'Vendor', 'remove'];
  sensorsDataSource = [];

  sensors = [];

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

  selectedPerson: PersonHealthData;

  constructor(private router: Router,
              // private patientsListService: PatientsListService,
              private currPersonService: CurrPersonService) {
    this.currPersonService.sharedMessage.
    subscribe(
      person => {
        //console.log(SENSORS);
        //console.log(person.id);
        //console.log(person.settings.sensors)
        this.selectedPerson = person;
        this.department = person.location.Department;
        this.roomNumber = person.location.RoomNumber;
        this.bedNumber = person.location.BedNumber;
        this.bedLocation = person.location.BedLocation;

        this.sensorsDataSource = person.settings.sensors;

        this.setSensors();
      })
   }

  ngOnInit() {
  }

  setSensors(){
    this.sensors = [];
    SENSORS.forEach(s => {
      if(s.UnitID !== 'None' && this.checkIfSensorInList(s)){
          s.PatientID = this.selectedPerson.PatientID;
      }
      if(s.PatientID === this.selectedPerson.PatientID && !this.checkIfSensorInList(s)){
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

  AddSensorToPatient(){
    if(this.sensor1.UnitID === 'None'){
      return;
    }
    this.sensor1.PatientID = this.selectedPerson.PatientID;
    const newPatientSensor = {
      UnitID: this.sensor1.UnitID,
      Name: this.sensor1.Name,
      Vendor: this.sensor1.Vendor,
      PatientID: this.selectedPerson.PatientID
    }
    this.sensorsDataSource.push(newPatientSensor);
    this.table.renderRows();
    this.sensor1 = {UnitID: 'None', Name:'None', Vendor: 'EarlySense', PatientID: -1};
    this.setSensors();

  }

  removeSensorFromPatient(element){
    let i = this.sensorsDataSource.indexOf(element);
    this.sensorsDataSource[i].PatientID = -1;
    this.sensorsDataSource.splice(i, 1);
    this.table.renderRows();
    this.setSensors();
  }

  OnSave() {
    const newLocation: Location = {
      Hospital: DEFAULT_HOSPITAL,
      Department: this.department,
      RoomNumber: this.roomNumber,
      BedNumber: this.bedNumber,
      BedLocation: this.bedLocation
    }

    if(this.sensorsDataSource.length === 0) {
      alert('Please choose at least one sensor for the patient');
      return;
    }

    const newSettings: PersonSettings = {
      minHR: this.minHR,
      maxHR: this.maxHR,
      minBR: this.minBR,
      maxBR: this.maxBR,
      minSpO2: this.minSpO2,
      maxSpO2: this.maxSpO2,
      sensors: this.sensorsDataSource
    }

    this.selectedPerson.settings = newSettings;
    this.selectedPerson.location = newLocation;

    // this.patientsListService.editPatient(this.selectedPerson);

    alert('Patient info updated');
    this.router.navigate(['/'])
  }

}
