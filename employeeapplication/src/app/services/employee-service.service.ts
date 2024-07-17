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

  deleteEmployees(id:number)
  {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployees(id:number, emp:Employee)
  {
    return this.httpClient.put(`http://localhost:3000/employees/${id}`, emp);
  }
}
