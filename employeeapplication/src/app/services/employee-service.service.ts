import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient: HttpClient) { }

  saveEmployee(emp:Employee)
  {
    return this.httpClient.post("http://localhost:3000/employees", emp);
  }

  getEmployees()
  {
    return this.httpClient.get("http://localhost:3000/employees");
  }
}
