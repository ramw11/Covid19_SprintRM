import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-heart-rate',
  templateUrl: './monitor-heart-rate.component.html',
  styleUrls: ['./monitor-heart-rate.component.scss']
})
export class MonitorHeartRateComponent implements OnInit {

  timer: any;
  timer2: any;
  currPic = '../../../../../assets/monitor_pics/heart.jpg';
  heartPicPath = '../../../../../assets/monitor_pics/heart.jpg';
  blackPicPath = '../../../../../assets/monitor_pics/black.jpg';
  hearts = [this.heartPicPath, this.blackPicPath];
  currPicIdx=0;
  heartRate = 68;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.randomHr();
    }, 1000 * 0.5);

    this.timer2 = setInterval(() => {
      this.heartPic();
    }, 1000 * 1);

  }

  randomHr(){
    this.heartRate = Math.floor(Math.random()*30) + 51;
  }

  heartPic(){
    this.currPic = this.hearts[this.currPicIdx]
    this.currPicIdx = 1 - this.currPicIdx;
  }

}
