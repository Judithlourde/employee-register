import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeUploadComponent } from './components/employee-upload/employee-upload.component';

const routes: Routes = [
  {
    path: 'employees', component: EmployeesListComponent
  },
  {
    path: 'employee-upload', component: EmployeeUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
