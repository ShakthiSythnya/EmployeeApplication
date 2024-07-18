import { Component, OnInit, Inject } from '@angular/core';
import {Employee} from '../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../services/employee-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { CoreService } from '../services/core.service';

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


  constructor(private _formBuilder: FormBuilder,
    private _employeeService: EmployeeServiceService,
    private _coreService: CoreService,
    private _diagRef:MatDialogRef<EmployeeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
    this.empForm = _formBuilder.group(this.employeeDetail)
  }
  onSave(){
    console.log(this.empForm);
    if(this.data !== null && this.data.id){
      this._employeeService.updateEmployees(this.data.id, this.empForm.value).subscribe({
        next:(val)=>{
          this._coreService.openNotification("Employee details edited successfully", "Ok");
          this._diagRef.close(true);
        }
      })

    }
    else{
          this._employeeService.saveEmployee(this.empForm.value).subscribe({
      next: (val: any)=>
      { 
        this._coreService.openNotification("Employee details saved successfully", "Ok");
        this._diagRef.close(true);
        console.log(val);
      },
      error:(err:any)=>{console.log(err);}
    });
  }
  }


  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

}
