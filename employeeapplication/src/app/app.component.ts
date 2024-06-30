import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'employeeapplication';

  constructor(public _dialog: MatDialog){

  }
  openEmployeeDialog()
  {
    this._dialog.open(EmployeeEditComponent);
  }
}
