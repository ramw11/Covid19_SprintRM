import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-breathing-rate',
  templateUrl: './monitor-breathing-rate.component.html',
  styleUrls: ['./monitor-breathing-rate.component.scss']
})
export class MonitorBreathingRateComponent implements OnInit {

  timer: any;
  currBr = 95;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.randomBr();
    }, 1000 * 0.5);
  }

  randomBr(){
    this.currBr = Math.floor(Math.random()*10) + 10;
  }

}
