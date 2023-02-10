import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService} from '../services/employees.service';
import {FormGroup} from '@angular/forms';

declare var alertify: any;

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
  
})
export class EditEmployeeComponent implements OnInit{

 

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  message: any;
 
  constructor(private route: ActivatedRoute, private empService: EmployeesService, private git: Router) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.empService.getEmployee2(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }
      }
    })
  }

  editEmployee(){
    this.empService.editEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (emp) =>{
        alertify.success("işlem gerçekleşti");
        this.git.navigate(['']);
      }
    })
  };

  deleteEmployee(){
    this.empService.deleteEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next:(response) =>{
        alertify.success("işlem gerçekleşti");
        this.git.navigate(['']);
    }
    })
  }
}

export interface employeeModel{
  name:string;
  email:string;
  phone:number;
  salary:number;
  department:string;
}