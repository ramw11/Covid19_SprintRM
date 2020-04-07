import { PatientsListService } from './../../services/patients-list.service';
import { CurrPersonService } from './../../services/curr-person.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         HEALTH_DATA } from '../../interfaces/PersonData';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, OnDestroy {
  // icons
  patient_icon = '../../../assets/icons/Patient.JPG';
  room_icon = '../../../assets/icons/Room.JPG';
  age_icon = '../../../assets/icons/age.JPG';
  hr_icon = '../../../assets/icons/HR.JPG'
  bp_icon = '../../../assets/icons/BP.jpg';
  spo2_icon = '../../../assets/icons/sat.jpg';
  br_icon = '../../../assets/icons/BR.JPG'
  fever_icon = '../../../assets/icons/Fever.JPG';
  alerts_icon = '../../../assets/icons/alert.JPG';
  progress_icon = '../../../assets/icons/status.JPG';
  removeUser_icon = '../../../assets/icons/remove-user.jpg';

  displayedColumns: string[] = ['PatientID', 'room', 'age', 'heartRate', 'bloodPresure', 'spO2',
                                'breathingRate', 'extraO2', 'fever', 'breathingInfo', 'alerts',
                              'progress', 'score', 'data', 'release'];
  dataSource = HEALTH_DATA;
  // dataSource: PersonHealthData[];

  timer: any;

  // subscription;

  constructor(private router: Router, 
              //private patientsListService: PatientsListService,
              private currPersonService: CurrPersonService) { }

  ngOnInit() {
    //this.subs();
  }

  subs(){
    /*console.log('******');
    console.log(this.patientsListService);
    this.subscription = this.patientsListService.people.subscribe(lst => {
      console.log(lst)
      console.log(lst.length)
      this.dataSource = lst;
    })*/
  }

  newSensor() {
    this.router.navigate(['/new-sensor']);
  }

  newPatient(){
    let newPerson = new PersonHealthData();
    newPerson.PatientID = this.getNextID();
    this.currPersonService.nextMessage(newPerson);
    this.router.navigate(['/new-patient'])
  }

  getNextID(){
    let nextID = -1;
    HEALTH_DATA.forEach(element => {
      console.log(element.PatientID);
      if(element.PatientID >= nextID)
        nextID = element.PatientID + 1;
      
    });
    console.log(nextID);
    return nextID;
  }

  patientData(element){
    this.currPersonService.nextMessage(element);
    this.router.navigate(['/patient-data']);
  }

  releasePatient(element){
    this.currPersonService.nextMessage(element);
    this.router.navigate(['/release-document']);
  }

  ngOnDestroy(): void {
    // console.log('---')
    // this.subscription.unsubscribe();
  }

}
