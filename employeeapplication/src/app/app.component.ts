import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'company','education','email', 'package', 'experience', 'gender'];

  title = 'employeeapplication';
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _employeeService: EmployeeServiceService){

  }
  ngOnInit(): void {
    this.getEmployees();
  }
  openEmployeeDialog()
  {
    this._dialog.open(EmployeeEditComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployees(){
    return this._employeeService.getEmployees().subscribe({
      next: (val:any)=> {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
       return val;
      },
      error: console.log
    })
  }

}
