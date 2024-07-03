import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../services/employee-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  empForm: FormGroup;
  employeeDetail :Employee = {
    firstName: '',
    lastName:'',
    dateOfBirth:Date.now(),
    gender:'',
    package:-1,
    experience:-1,
    education:'',
    company: '',
    email: ''


  };
  education:string[] = ['B.Tech', 'B.Com'];


  constructor(private _formBuilder: FormBuilder, private _employeeService: EmployeeServiceService, private _diagRef:MatDialogRef<EmployeeEditComponent> ) { 
    this.empForm = _formBuilder.group(this.employeeDetail)
  }
  onSave(){
    console.log(this.empForm);
    this._employeeService.saveEmployee(this.empForm.value).subscribe({
      next: (val: any)=>
      { 
        alert("Dave Saved1");
        this._diagRef.close();
        console.log(val);
      },
      error:(err:any)=>{console.log(err);}
    });
  }


  ngOnInit(): void {
  }

}
