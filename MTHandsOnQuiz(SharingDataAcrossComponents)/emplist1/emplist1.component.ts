import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
  EmployeeDetails:any;
  constructor(private employee:EmployeesService) { }

  ngOnInit(): void {
    this.EmployeeDetails = this.employee.EmployeeDetails();
  }

}
