import { SENSORS } from './../../interfaces/PersonData';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss']
})
export class NewSensorComponent implements OnInit {

  sensorID;
  sensorName: string = '';
  sensorVendor: string = '';

  constructor(private router: Router) {
    console.log('NewSensorComponent: ctor');
   }

  ngOnInit() {
  }

  OnClick(){
    if(!this.validate()){
      alert('Please check that all of the fields are set properly');
      return;
    }
    const sensor = {
      UnitID: this.getNextID(), 
      Name: this.sensorName,
      Vendor: this.sensorVendor, 
      PatientID: -1
    }
    
    SENSORS.push(sensor);
    /* liad */this.postSensor(sensor);
    //alert('Sensor added to list');
    //this.router.navigate(['/']);
  }

  /* liad */ postSensor(sensor){
    let req= new XMLHttpRequest();
    req.open('POST', 'http://localhost:3000/new_sensor', true);
    req.onload= function(){
      req.setRequestHeader('Content-Type', 'application/json');
      
    }

    req.onerror= function(err){
      console.log(err);
    }

    req.send(sensor);
  }

  validate(){
    if(this.sensorID === '' || this.sensorVendor === ''){
      return false;
    }
    return true;
  }

  getNextID(){
    // todo: implement 
    return '110';
  }

}
