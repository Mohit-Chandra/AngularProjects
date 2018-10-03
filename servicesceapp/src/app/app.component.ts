import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { EmployeedetailService } from './employeedetail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeedetailService] //Register the  service with angular Injector
})
export class AppComponent {
  title = 'app';
}
