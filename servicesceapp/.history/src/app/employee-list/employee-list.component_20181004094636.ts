import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any=[];
 
  constructor(private empService:EmployeeserviceService) { }

  ngOnInit() {
        this.empService
            .getEmployees()
            .subscribe((resEmpData) => this.employees = resEmpData);
  }

}
