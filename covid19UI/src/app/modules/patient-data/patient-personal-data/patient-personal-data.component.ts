import { CurrPersonService } from './../../../services/curr-person.service';
import { Component, OnInit } from '@angular/core';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         Location,
         DEFAULT_HOSPITAL,
         DEFAULT_PERSON_LOCATION,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         HEALTH_DATA,
         SENSORS } from '../../../interfaces/PersonData';

@Component({
  selector: 'app-patient-personal-data',
  templateUrl: './patient-personal-data.component.html',
  styleUrls: ['./patient-personal-data.component.scss']
})
export class PatientPersonalDataComponent implements OnInit {

  patientName;

  location: Location;
  inRisk: boolean;
  disabled = true;
  extraO2: boolean;

  selectedPerson: PersonHealthData;

  statusPath;
  greenStatusPath = './../../../../assets/colors/green.jpg';
  yellowStatusPath = './../../../../assets/colors/yellow.jpg';
  orangeStatusPath = './../../../../assets/colors/orange.jpg';
  redStatusPath = './../../../../assets/colors/red.jpg';

  criticalScore = [this.redStatusPath, this.yellowStatusPath]
  criticalCurrColor = 0;

  timer: any;

  constructor(private currPersonService: CurrPersonService) {
    this.currPersonService.sharedMessage.
    subscribe(person => {
      this.selectedPerson = person;
      this.patientName = person.personal.Name;
      this.location = person.location;
      this.inRisk = person.personal.HighRiskGroup;
      this.statusPath = this.setColor(person.score);
      person.extraO2 === 'NO' ? this.extraO2 = false : this.extraO2 = true;
    })
   }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.randomScore();
    }, 1000 * 0.5);
  }

  setColor(score){
    if(score < 2){
      return this.greenStatusPath;
    }
    if(score >= 2 && score<=4){
      return this.yellowStatusPath;
    }
    if(score >= 5 && score <= 6){
      return this.orangeStatusPath;
    }
    else {
      return this.redStatusPath;
    }
  }

  randomScore() {
    if(this.selectedPerson.score >= 7)
    this.statusPath = this.criticalScore[this.criticalCurrColor];
    this.criticalCurrColor = 1 - this.criticalCurrColor;  
  }

}
