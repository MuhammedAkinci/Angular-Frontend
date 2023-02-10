import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './services/employees.service';

const routes: Routes = [
  {path: '', component: EmployeesListComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'employees/edit/:id', component: EditEmployeeComponent}
 //  {path: 'api/Employees/UpdateEmployee', component:}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
