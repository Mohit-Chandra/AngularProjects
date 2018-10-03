import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list-count',
  templateUrl: './employee-list-count.component.html',
  styleUrls: ['./employee-list-count.component.css']
})
export class EmployeeListCountComponent implements OnInit {

  @Input()
  all:number;

  @Input()
  male:number;

  @Input()
  female:number;

  selectedRadioButtonValue : string='All';

  @Output()
  //The Output decorator makes the property an Output property
  // EventEmitter class is used to create the custom event
  // When the radio button selection changes, the selected
  // radio button value which is a string gets passed to the
  // event handler method. Hence, the event payload is string.
  countRadioButtonSelectionChanged: EventEmitter<String> = 
  new EventEmitter<String>();

  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
