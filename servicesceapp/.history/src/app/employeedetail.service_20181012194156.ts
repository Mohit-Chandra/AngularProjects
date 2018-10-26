import { Injectable } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';

@Injectable()
export class EmployeedetailService {

  constructor(private empService:EmployeeserviceService) { }
  employees;

  getEmployees(){
    // return [
    //     {"id":1,"name":"mohit","gender":"male"},
    //     {"id":2,"name":"akash","gender":"male"},
    //     {"id":3,"name":"rani","gender":"female"},
    //     {"id":4,"name":"kalyugi","gender":"female"}
    // ]
    return this.employees = this.empService.getEmployees();
  }
}
