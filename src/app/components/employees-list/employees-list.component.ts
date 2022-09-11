import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 'CWO9ZHvBTtaB0rfhwhCJnO',
      name: 'Romin Hanks',
      email: 'romin.k.irani@gmail.com',
      phone: 4081234567,
      salary: 60000,
      department: 'Human Resource'
    },
    {
      id: 'EJPB8vuKsUQzYmuM7GVGgT',
      name: 'Neil Irani',
      email: 'neilrirani@gmail.com',
      phone: 4081111111,
      salary: 80000,
      department: 'Information Technology'
    },
    {
      id: 'kwp71lZJIGHA037EmRwV6e',
      name: 'Tom Doe',
      email: 'tomhanks@gmail.com',
      phone: 4082222222,
      salary: 40000,
      department: 'Accounts'
    },

  ];

  constructor() { }

  ngOnInit(): void {
    

  }

}
