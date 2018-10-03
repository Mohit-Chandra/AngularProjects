import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipePipe } from './employee-title-pipe.pipe';
import { EmployeeListCountComponent } from './employee-list-count/employee-list-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTitlePipePipe,
    EmployeeListCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
