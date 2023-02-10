import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmnet } from 'src/environments/environment';
import { employeeModel } from '../add-employee/add-employee.component';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 
  path2 = environmnet.baseApiUrl;
  path = environmnet.apiUrl;
  // baseApiUrl: string = environmnet.baseApiUrl;
  constructor(private http: HttpClient) { }

  // getAllEmployees(): Observable<Employee[]>{
  //     return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  // }

  getEmploye():Observable<any[]>
  {
    const apiUrl = `Employees/GetList`;
    alert(this.path + apiUrl)
    return this.http.get<any[]>(this.path + apiUrl);
  }
  
  addEmploye(emp: employeeModel):Observable<result> 
  {
    const apiUrl = `Employees/Add`;
    return this.http.post<result>(this.path+apiUrl, emp)
  }

  getEmployee2(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.path2 + `api/Employees/` +  id);
  }

  editEmployee(id: string, emp: employeeModel): Observable<result>{
    return this.http.put<result>(this.path2 + "api/Employees/UpdateEmployee?id=" + id, emp);
  }
  deleteEmployee(id:string, emp: employeeModel): Observable<Employee>{
    return this.http.delete<Employee>(this.path2 + `api/Employees/` + id); 
  }
}

export interface result{
  success: boolean; 
  message: boolean;
}