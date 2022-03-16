import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
  EmployeeDetails:any;
  constructor(private employee:EmployeesService) { }

  ngOnInit(): void {
    this.EmployeeDetails = this.employee.EmployeeDetails();
  }

}
