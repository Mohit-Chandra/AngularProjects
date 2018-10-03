import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListCountComponent } from './employee-list-count.component';

describe('EmployeeListCountComponent', () => {
  let component: EmployeeListCountComponent;
  let fixture: ComponentFixture<EmployeeListCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
