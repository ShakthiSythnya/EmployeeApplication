import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeServiceService } from './services/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'employeeapplication';

  constructor(private _dialog: MatDialog, private _employeeService: EmployeeServiceService){

  }
  openEmployeeDialog()
  {
    this._dialog.open(EmployeeEditComponent);
  }

  getEmployees(){
    return this._employeeService.getEmployees().subscribe({
      next: (val:any)=> {
        console.log(val);
       return val;
      }
    })
  }

}
