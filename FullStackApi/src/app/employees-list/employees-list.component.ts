import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeesService){}

  ngOnInit(): void 
  {

    this.employeeService.getEmploye().subscribe(resp =>
      {
        this.employees = resp
        console.log("gelen veri", this.employees);
      })
  }
}
