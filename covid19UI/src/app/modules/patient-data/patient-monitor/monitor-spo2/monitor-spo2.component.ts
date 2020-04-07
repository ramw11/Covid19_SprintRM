import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-spo2',
  templateUrl: './monitor-spo2.component.html',
  styleUrls: ['./monitor-spo2.component.scss']
})
export class MonitorSpo2Component implements OnInit {

  timer: any;
  SpO2 = 95;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.randomSpO2();
    }, 1000 * 0.5);
  }

  randomSpO2(){
    this.SpO2 = Math.floor(Math.random()*10) + 90;
  }

}
