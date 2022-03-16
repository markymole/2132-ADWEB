import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
  EmployeeDetails:any;
  constructor(private employee:EmployeesService) { }

  ngOnInit(): void {
    this.EmployeeDetails = this.employee.EmployeeDetails();
  }

}
