import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-temperature',
  templateUrl: './monitor-temperature.component.html',
  styleUrls: ['./monitor-temperature.component.scss']
})
export class MonitorTemperatureComponent implements OnInit {

  timer: any;
  currTmp = 36;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.randomTmp();
    }, 1000 * 0.5);
  }

  randomTmp(){
    this.currTmp = Math.floor(Math.random()*8) + 35;
  }
}
