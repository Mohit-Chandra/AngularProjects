import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3
    {
      color:darkred;
    }
  `]
})
export class AppComponent {
  name="";
  logs=[];
  toggling=false;
  onToggle()
  {
    this.logs.push(this.logs.length+1);
    return this.toggling = !this.toggling;
  }
}
