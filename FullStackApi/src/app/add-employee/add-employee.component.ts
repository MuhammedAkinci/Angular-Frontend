import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService, result } from '../services/employees.service';
import {FormGroup, FormControl, FormBuilder, FormGroupDirective} from '@angular/forms'
import { Validators } from '@angular/forms';

declare var alertify: any;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
  
})
export class AddEmployeeComponent  { //add

  employeeForm!: FormGroup;
  emp!:employeeModel;
  message!:result;

  constructor(private employeeService: EmployeesService, private fb: FormBuilder, private git: Router){}

  ngOnInit(): void
  {  
      this.createForm();
  }

  
  createForm(){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      salary:['', [Validators.required, Validators.maxLength(5)]],
      department:['', [Validators.required, Validators.minLength(4)]]
    })
  }
  SendEmployee(){
    if(this.employeeForm.valid){
      console.log("degerler", this.employeeForm.value)
      this.employeeService.addEmploye(this.employeeForm.value).subscribe((resp:any)=>{
        this.message=resp;
        if (this.message.success){
          alertify.success("işlem gerçekleşti");
          this.git.navigate(['']);
        }
      })
    }
    else{
      alertify.error("İşlem Gerçekleştirilemedi");
      alertify.error("Eksik değer girdiniz");
    }
  }

}
export interface employeeModel{
  name:string;
  email:string;
  phone:number;
  salary:number;
  department:string;
}
