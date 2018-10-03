import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGameEmitter=new EventEmitter<number>();
  counter;
  lastInterval=0;
  constructor() { }

  ngOnInit() {
    
  }
  onStartGame()
  {
    this.counter=setInterval(() => { 
      this.startGameEmitter.emit(this.lastInterval+1);
      this.lastInterval++;
    },1000);
  }
  onStopGame()
  {
    clearInterval(this.counter);
  }

}
