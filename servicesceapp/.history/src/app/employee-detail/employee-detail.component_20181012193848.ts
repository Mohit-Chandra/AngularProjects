import { Component, OnInit } from '@angular/core';
import { EmployeedetailService } from '../employeedetail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  constructor(private empDetailsService:EmployeedetailService) { }

  ngOnInit() {
    this.empDetailsService.getEmployees().subscribe((resEmpData)=>this.employees=resEmpData);
  }

}
