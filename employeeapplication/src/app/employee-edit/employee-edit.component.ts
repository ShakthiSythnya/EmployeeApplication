import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employeeDetail !:Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
