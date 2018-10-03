import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
 employees:IEmployee[];

   studentName:string = 'Mohit';
   selectedEmployeeCountRadiobutton:string = "All";
  
  constructor() { 
    this.employees = [
      {
          code: 'emp101', name: 'Tom', gender: 'Male',
          annualSalary: 5500, dateOfBirth: '25/6/1988'
      },
      {
          code: 'emp102', name: 'Alex', gender: 'Male',
          annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      },
      {
          code: 'emp103', name: 'Mike', gender: 'Male',
          annualSalary: 5900, dateOfBirth: '12/8/1979'
      },
      {
          code: 'emp104', name: 'Mary', gender: 'Female',
          annualSalary: 6500.826, dateOfBirth: '14/10/1980'
      },
  ];
  }

  ngOnInit() {
  }
  getEmployees(): void {
    this.employees = [
        {
            code: 'emp101', name: 'Tom', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '25/6/1988'
        },
        {
            code: 'emp102', name: 'Alex', gender: 'Male',
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        },
        {
            code: 'emp103', name: 'Mike', gender: 'Male',
            annualSalary: 5900, dateOfBirth: '12/8/1979'
        },
        {
            code: 'emp104', name: 'Mary', gender: 'Female',
            annualSalary: 6500.826, dateOfBirth: '14/10/1980'
        },
        {
            code: 'emp105', name: 'Nancy', gender: 'Female',
            annualSalary: 6700.826, dateOfBirth: '15/12/1982'
        },
    ];
  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
}

 getAllEmployees():number{
   return this.employees.length;

 }
  getFemaleEmployees():number{
    return this.employees.filter(e => e.gender==="Female").length;
  }
  getMaleEmployees():number{
    return this.employees.filter(e => e.gender==="Male").length;
  }
  
  onEmployeeCountRadioButtonChange(selectedradioButtonValue:string):void{
      this.selectedEmployeeCountRadiobutton = selectedradioButtonValue;
  }

}
